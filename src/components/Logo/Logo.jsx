import { Link } from "react-router-dom";
import style from "./Logo.module.scss";

export const Logo = () => (
  <Link to="/">
    <img
      className={style.img}
      src="/img/logo.svg"
      alt="Логотип мебельного маркета Koff"
    />
  </Link>
);
