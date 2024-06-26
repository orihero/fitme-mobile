import { NavigationContainer } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import Toast from "react-native-toast-message";
import { ApiService, AuthService } from "../services";
import { clearT } from "../services/AuthService";
import { useRedux } from "../store/hooks";
import { setTokens, setTrainer, setUser } from "../store/slices/appSlice";
import { setCategoriesByType } from "../store/slices/categorySlice";
import { setDishes } from "../store/slices/dishSlice";
import { setProducts } from "../store/slices/productSlice";
import {
  Category,
  CategoryType,
  Dish,
  Product,
  ROLES,
  Response,
  Token,
  Trainer,
  User,
} from "../types";
import { customRequests } from "../utils/api";
import { setOauthRequestInterceptor } from "../utils/axios";
import Example from "./Example";
import HomeStack from "./HomeStack";
import PublicStack from "./PublicStack";
import LottieView from "lottie-react-native";

const Root = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [store, dispatch] = useRedux((s) => s);
  const { width, height } = Dimensions.get("window");

  const example = false;
  const {
    app: { token, loading: appLoading },
  } = store;

  const setBearerToken = () => {
    if (token?.access_token) {
      setOauthRequestInterceptor(`Bearer ${token.access_token}`);
    }
  };

  const getUser = async () => {
    try {
      if (token) {
        const resUser = await ApiService.get<Response<User>>("/users/me");

        // const { scheduleWorkouts, ...rest } = res.data.data;
        if (resUser.data.role === ROLES.TRAINER) {
          const res = await ApiService.get<AxiosResponse<Trainer>>(
            `/trainers/find/${resUser.data?.phoneNumber}`
          );
          dispatch(setTrainer(res.data));
        }
        dispatch(setUser(resUser.data));
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (e: any) {
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
    setLoading(true);
    try {
      const resCategories = await ApiService.get<Response<Category[]>>(
        "/categories?parents=ss"
      );

      const resProducts = await ApiService.get<Response<Product[]>>(
        "/products"
      );

      const resDishes = await ApiService.get<Response<Dish[]>>("/dishes");

      const resUser = await ApiService.get<Response<User>>("/users/me");

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
    setLoading(false);
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
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/images/fitmeLogo.jpg")}
            style={{ width: 300, height: 300 }}
          />
        </View>
      ) : (
        screens
      )}
      <Toast />
      {appLoading && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.95)",
          }}
        >
          <LottieView
            source={require("../assets/lottie/loading.json")}
            autoPlay
            loop
            style={{ width, height }}
          />
        </View>
      )}
    </NavigationContainer>
  );
};

export default Root;
