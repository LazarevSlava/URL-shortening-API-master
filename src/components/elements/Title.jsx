// Available size options(String):
//   - 'small'
//   - 'normal'
//   - 'big'

// Available color options(String):
//   - 'white'
//   - 'black'
//   - 'cyan'
import clsx from 'clsx';
import style from './Title.module.css';

function Title({ children, tag = 'h1', size = 'normal', color = 'black' }) {
  const Tag = tag;
  const classNames = clsx(style[size], style[color]);
  return <Tag className={classNames}>{children}</Tag>;
}
export { Title };
