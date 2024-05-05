// Available size options(String):
//   - 'small'
//   - 'normal'
//   - 'large'
// Available color options(String):
//   - 'cyan'
//   - 'black'
import clsx from 'clsx';
import style from './Text.module.css';

function Text({ children, color = 'black', size = 'normal' }) {
  const classNames = clsx(style[size], style[color]);
  return <p className={classNames}>{children}</p>;
}
export { Text };
