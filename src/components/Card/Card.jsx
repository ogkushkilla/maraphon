import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import { Container } from "../../views/Container/Container";
import style from "./Card.module.scss";
import { fetchProduct } from "../../store/product/product.slice";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../Slider/Slider";
import { FavoriteButton } from "../Favorite/FavoriteButton";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading || data.length === 0) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!data) return <div>Продукт не найден, попробуйте позже</div>;

  return (
    <section className={style.card}>
      <Container className={style.container}>
        <h2 className={style.title}>{data.name}</h2>

        <Slider data={data} />

        <div className={style.info}>
          <div className={style.price}>{data.price.toLocaleString()} ₽</div>
          <div className={style.article}>арт. {data.article}</div>

          <div className={style.characteristics}>
            <h3 className={style.characteristicsTitle}>Общие характеристики</h3>
            <table className={style.table}>
              <tbody>
                {data.characteristics.map((characteristic, i) => (
                  <tr key={i} className={style.row}>
                    <td className={style.field}>{characteristic[0]}</td>
                    <td className={style.value}>{characteristic[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={style.btns}>
            <button className={style.btn}>В корзину</button>
            <FavoriteButton className={style.like} />
          </div>
        </div>
      </Container>
    </section>
  );
};
