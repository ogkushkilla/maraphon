import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import { Container } from "../../views/Container/Container";
import style from "./Card.module.scss";
import { fetchProduct } from "../../store/product/product.slice";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "../Slider/Slider";

export const Card = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading || data.length === 0) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

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
            <button className={style.like} data-id={data.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16">
                <path
                  d="M8.41331 13.8733C8.18665 13.9533
                    7.81331 13.9533 7.58665
                    13.8733C5.65331 13.2133 1.33331
                    10.46 1.33331 5.79332C1.33331
                    3.73332 2.99331 2.06665 5.03998
                    2.06665C6.25331 2.06665 7.32665
                    2.65332 7.99998 3.55998C8.67331
                    2.65332 9.75331 2.06665 10.96
                    2.06665C13.0066 2.06665 14.6666
                    3.73332 14.6666 5.79332C14.6666
                    10.46 10.3466 13.2133 8.41331 13.8733Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
