import style from './Header.module.css';
import { useState } from 'react';
import Logo from '../assets/logo.svg?react';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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
        <button className={`${style.btn} ${style.btn_sign}`}>sign Up</button>
      </div>
    </div>
  );
}

export { Header };
