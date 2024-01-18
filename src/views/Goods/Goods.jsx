import { Container } from "../Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import style from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../store/products/products.slice";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>

        <ul className={style.list}>
          {data.map((item, i) => (
            <li key={i}>
              <CardItem data={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
