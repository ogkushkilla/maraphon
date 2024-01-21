import { Link } from "react-router-dom";
import style from "./CardItem.module.scss";
import { FavoriteButton } from "../Favorite/FavoriteButton";

export const CardItem = ({ data }) => (
  <article className={style.card}>
    <Link to={`/product/${data.id}`} className={style.link}>
      <img
        className={style.photo}
        src={`https://koff-api.vercel.app/${data.images[0]}`}
        alt="Фото товара"
      />
    </Link>
    <div className={style.description}>
      <Link to={`/product/${data.id}`} className={style.link}>
        <h3 className={style.title}>{data.name}</h3>
      </Link>
      <span className={style.price}>{data.price.toLocaleString()} ₽</span>
    </div>

    <FavoriteButton className={style.favorite} id={data.id} />
    <button className={style.button}>В корзину</button>
  </article>
);
