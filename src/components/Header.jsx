import clsx from 'clsx';
import style from './Header.module.css';
import { useState } from 'react';
import Logo from './elements/Logo';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const classNames = clsx(style.btn_sign, style.btn);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <div className={style.head_block}>
      <div className={style.head}>
        <Logo />
        <button className={style.btn_menu} onClick={toggleMenu} />
      </div>
      <div className={`${style.menu} ${isMenuVisible ? '' : style.hidden}`}>
        <button className={style.btn}>Features</button>
        <button className={style.btn}>Pricing</button>
        <button className={style.btn}>Resources</button>
        <hr className={style.hr} />
        <button className={style.btn}>Login</button>
        <button className={classNames}>Sign Up</button>
      </div>
      <div className={style.menu_big_screen}>
        <nav>
          <ul className={style.menu_big_screen}>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>Login</p>
          <button className={classNames}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export { Header };
