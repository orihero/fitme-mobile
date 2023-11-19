import { useEffect, useState } from "react";
import { useRedux } from "../../../../../store/hooks";
import {
  selectLanguage,
  selectUser,
  setUser,
} from "../../../../../store/slices/appSlice";
import { selectProductCategories } from "../../../../../store/slices/categorySlice";
import { ApiService } from "../../../../../services";
import { Product } from "../../../../../types";
import { selectProducts } from "../../../../../store/slices/productSlice";
import { useNavigation } from "@react-navigation/native";
import { NUTRITION } from "../../../../../navigation/ROUTES";

export const BaseProductsHooks = () => {
  const [language] = useRedux(selectLanguage);
  const [user, dispatch] = useRedux(selectUser);
  const [allProducts] = useRedux(selectProducts);
  const [productCategories] = useRedux(selectProductCategories);

  const [activeTab, setActiveTab] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  const getProducts = () => {
    if (user) {
      setProducts(
        !!allProducts && allProducts.length > 0
          ? allProducts.filter(
              (p) => p.category?._id === productCategories[activeTab]?._id
            )
          : []
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, [activeTab, user]);

  const onSelect = (product: Product) => {
    let arr = [...selected];

    if (selected.find((s) => s._id === product._id)) {
      arr = arr.filter((a) => a._id !== product._id);
    } else {
      arr.push(product);
    }

    setSelected(arr);
  };

  const onAdd = async () => {
    if (user) {
      setLoading(true);

      for (let i = 0; i < selected.length; i++) {
        await ApiService.put(`/users/add-product/${user._id}`, {
          productId: selected[i]._id,
        });
      }

      dispatch(
        setUser({
          ...user,
          products: [...user.products, ...selected],
        })
      );

      setLoading(false);
      setSelected([]);
    }
  };

  const onCreate = () => {
    navigation.navigate(NUTRITION.CREATE_PRODUCT);
  };

  return {
    activeTab,
    setActiveTab,
    products,
    selected,
    language,
    loading,
    productCategories,
    onSelect,
    onAdd,
    onCreate,
  };
};
