import style from './Button.module.css';

function Button({ children, size, variant }) {
  return <button className={`${style[size]} ${style[variant]}`}>{children}</button>;
}
export { Button };
