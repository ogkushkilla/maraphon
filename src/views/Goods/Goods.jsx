import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import style from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const search = searchParam.get("search");

  useEffect(() => {
    dispatch(fetchProducts({ category, search }));
  }, [dispatch, category, search]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>
        {data.length ? (
          <ul className={style.list}>
            {data.map((item, i) => (
              <li key={i}>
                <CardItem data={item} />
              </li>
            ))}
          </ul>
        ) : (
          <div>По вашему запросу товаров не найдено</div>
        )}
        ;
      </Container>
    </section>
  );
};
