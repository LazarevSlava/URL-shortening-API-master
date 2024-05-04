//  Available size options(String):
//  - 'small'
//  - 'medium'
//  - 'large'

//  Available variant options(String):
//   - 'big_radius'
//   - 'normal-radius'
//   - 'no_radius'
import clsx from 'clsx';
import style from './Button.module.css';

function Button({
  children,
  size = 'medium',
  variant = 'no_radius',
  onClick = Function.prototype,
}) {
  const classNames = clsx(style[size], style[variant], style.btn);
  return (
    <button onClick={onClick} className={classNames}>
      {children}
    </button>
  );
}
export { Button };
