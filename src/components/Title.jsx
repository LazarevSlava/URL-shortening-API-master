import style from './Title.module.css';

function Title({ children, size }) {
  return <h1 className={style[size]}>{children}</h1>;
}
export { Title };
