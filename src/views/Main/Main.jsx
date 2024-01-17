import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Catalog } from "../../components/Catalog/Catalog";
import { Goods } from "../../components/Goods/Goods";
import { fetchCategories } from "../../store/categories/categories.slice";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) return <div>Загрузка...</div>;
  if (errorCategories || errorProducts) {
    return <div>{`${errorCategories ? errorCategories :
    errorProducts ? errorProducts :
    "Ошибка"}`}</div>;
  }

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
