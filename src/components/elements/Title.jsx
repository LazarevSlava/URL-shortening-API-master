// Available size options(String):
//   - 'small'
//   - 'normal'
//   - 'big'

// Available color options(String):
//   - 'white'
//   - 'black'
import style from './Title.module.css';

function Title({ children, tag = 'h1', size = 'normal', color = 'black' }) {
  const Tag = tag;
  return <Tag className={`${style[size]} ${style[color]}`}>{children}</Tag>;
}
export { Title };
