// Available size options(String):
//   - 'small'
//   - 'normal'
//   - 'big'
import style from './Title.module.css';

function Title({ children, tag='h1', size = 'normal' }) {
  const Tag=tag;
  return <Tag className={style[size]}>{children}</Tag>;
}
export { Title };
