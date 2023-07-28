import { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import PublicStack from "./PublicStack";
import HomeStack from "./HomeStack";
import Example from "./Example";
import { useRedux } from "../store/hooks";
import { ApiService, AuthService } from "../services";
import {
  Category,
  CategoryType,
  Dish,
  Product,
  Response,
  Token,
  User,
} from "../types";
import { setCategoriesByType } from "../store/slices/categorySlice";
import { setTokens, setUser } from "../store/slices/appSlice";
import { setOauthRequestInterceptor } from "../utils/axios";
import { clearT } from "../services/AuthService";
import { customRequests } from "../utils/api";
import { setProducts } from "../store/slices/productSlice";
import { setDishes } from "../store/slices/dishSlice";

const Root = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [store, dispatch] = useRedux((s) => s);

  const example = false;
  const {
    app: { token },
  } = store;

  const setBearerToken = () => {
    if (token?.access_token) {
      setOauthRequestInterceptor(`Bearer ${token.access_token}`);
    }
  };

  const getUser = async () => {
    try {
      if (token) {
        console.log("GETTING USER");
        
        const resUser = await ApiService.get<Response<User>>("/users/me");

        // const { scheduleWorkouts, ...rest } = res.data.data;

        dispatch(setUser(resUser.data));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (e: any) {

      console.log(JSON.stringify(e),"ERRROR");

      try {
        const resToken = await customRequests.getNewAccessToken();

        if (resToken.error) {
          if (resToken.error.code === 400) {
            clearT();
          }

          return;
        }

        const newToken: Token = {
          refresh_token: token?.refresh_token || "",
          access_token: resToken.data.access_token,
        };

        dispatch(setTokens(newToken));
        await AuthService.setToken(newToken);

        const resUser = await customRequests.getUser();

        const { scheduleWorkouts, ...rest } = resUser.data;

        dispatch(setUser(resUser.data));
        setIsAuthenticated(true);
      } catch (ee: any) {}
    }
  };

  useEffect(() => {
    setBearerToken();
    getUser();
  }, [token?.access_token]);

  const effect = async () => {
    try {
      const resCategories = await ApiService.get<Response<Category[]>>(
        "/categories?parents=ss"
      );

      const resProducts = await ApiService.get<Response<Product[]>>(
        "/products"
      );

      const resDishes = await ApiService.get<Response<Dish[]>>("/dishes");

      const resUser = await ApiService.get<Response<User>>("/users/me");
      console.log({ usr: resUser });

      dispatch(setUser(resUser.data));

      dispatch(
        setCategoriesByType({
          type: CategoryType.EXERCISE,
          categories: resCategories.data.filter(
            (v) => v.type === CategoryType.EXERCISE
          ),
        })
      );
      dispatch(
        setCategoriesByType({
          type: CategoryType.PRODUCT,
          categories: resCategories.data.filter(
            (v) => v.type === CategoryType.PRODUCT
          ),
        })
      );
      dispatch(
        setCategoriesByType({
          type: CategoryType.DISH,
          categories: resCategories.data.filter(
            (v) => v.type === CategoryType.DISH
          ),
        })
      );
      dispatch(setProducts(resProducts.data));
      dispatch(setDishes(resDishes.data));
    } catch (e: any) {
      console.log("ee: ", JSON.stringify(e, null, 4));
    }
  };

  useEffect(() => {
    effect();
  }, []);

  const screens = useMemo(() => {
    return isAuthenticated ? <HomeStack /> : <PublicStack />;
  }, [isAuthenticated]);

  if (example) {
    return <Example />;
  }

  return (
    <NavigationContainer>
      {screens}
      <Toast />
    </NavigationContainer>
  );
};

export default Root;
