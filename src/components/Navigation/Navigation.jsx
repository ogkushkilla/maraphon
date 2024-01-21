import { Link } from "react-router-dom";
import style from "./Navigation.module.scss";

export const Navigation = () => (
  <nav className={style.navigation}>
    <Link to="/favorite" className={style.link}>
      <span className={style.text}>Избранное</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.41334 13.8733C8.18668 13.9533 7.81334
          13.9533 7.58668 13.8733C5.65334 13.2133 1.33334
          10.46 1.33334 5.79332C1.33334 3.73332 2.99334
          2.06665 5.04001 2.06665C6.25334 2.06665 7.32668
          2.65332 8.00001 3.55998C8.67334 2.65332 9.75334
          2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332
          14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41334 13.8733Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
    <Link to="/cart" className={style.link}>
      <span className={style.text}>Корзина</span>
      <span>(0)</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.87333 1.33325L3.45999 3.75325"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1267 1.33325L12.54 3.75325"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.33334 5.23324C1.33334 3.9999 1.99334 3.8999
          2.81334 3.8999H13.1867C14.0067 3.8999 14.6667 3.9999
          14.6667 5.23324C14.6667 6.66657 14.0067 6.56657
          13.1867 6.56657H2.81334C1.99334 6.56657 1.33334
          6.66657 1.33334 5.23324Z"
          stroke="currentColor"
        />
        <path
          d="M6.50665 9.33325V11.6999"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M9.57333 9.33325V11.6999"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M2.33334 6.66675L3.27334 12.4267C3.48668 13.7201
          4.00001 14.6667 5.90668 14.6667H9.92668C12 14.6667
          12.3067 13.7601 12.5467 12.5067L13.6667 6.66675"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  </nav>
);
