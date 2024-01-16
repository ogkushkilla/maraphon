import style from "./Developers.module.scss";

export const Developers = () => (
  <ul className={style.developers}>
    <li>
      Designer:&nbsp;
      <a
        href="https://t.me/Mrshmallowww"
        className={style.link}
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li>
      Developer:&nbsp;
      <a
        href="https://t.me/ogkushkilla"
        className={style.link}
        target="_blank"
        rel="noreferrer">
        Seva
      </a>
    </li>
  </ul>
);
