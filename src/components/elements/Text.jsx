import style from './Text.module.css';

function Text({ children }) {
  return <p className={style.text}>{children}</p>;
}
export { Text };
