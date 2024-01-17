import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import style from "./Goods.module.scss";

export const Goods = ({ data }) => (
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
