import style from "./Logo.module.scss";

export const Logo = () => (
  <a href="/">
    <img
      className={style.img}
      src="/img/logo.svg"
      alt="Логотип мебельного маркета Koff"
    />
  </a>
);
