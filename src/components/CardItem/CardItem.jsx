import style from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={style.card}>
    <img className={style.photo} src="/img/photo.jpg" alt="Фото товара" />
    <div className={style.description}>
      <h3 className={style.title}>Кресло с подлокотниками</h3>
      <span className={style.price}>5 000 ₽</span>
    </div>
    <button className={style.button}>В корзину</button>
  </article>
);
