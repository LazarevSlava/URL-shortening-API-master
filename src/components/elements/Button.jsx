//  Available size options(String):
//  - 'small'
//  - 'medium'
//  - 'large'

//  Available variant options(String):
//   - 'big_radius'
//   - 'normal-radius'
//   - 'no_radius'

import style from './Button.module.css';

function Button({
  children,
  size = 'medium',
  variant = 'no_radius',
  onClick = Function.prototype,
}) {
  return (
    <button onClick={onClick} className={`${style.btn} ${style[size]} ${style[variant]}`}>
      {children}
    </button>
  );
}
export { Button };
