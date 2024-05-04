// Available size options(String):
//   - 'small'
//   - 'normal'
//   - 'large'
// Available color options(String):
//   - 'cyan'
//   - 'black'
// Available sort options(String):
//   - 'none'
//   - 'longUrl'
import style from './Text.module.css';

function Text({ children, color = 'black', size = 'normal', sort = 'none' }) {
  return (
    <p className={`${style.text} ${style[color]} ${style[size]} ${style[sort]}`}>{children}</p>
  );
}
export { Text };
