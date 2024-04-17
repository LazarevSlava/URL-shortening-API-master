import style from './Header.module.css';
import { useState } from 'react';
import logo from '../../images/logo.svg?react';

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };
  return (
    <div className={style.head_block}>
      <div className={style.head}>
        <img src={logo} alt="logo" />
        <button className={style.btn_menu} onClick={toggleMenu}>
      </div>
      <div className={`${style.menu} ${isMenuVisible ? '' : style.hidden}`}>
        <button className={style.btn}>Features</button>
        <button className={style.btn}>Pricing</button>
        <button className={style.btn}>Resources</button>
        <hr className={style.hr} />
        <button className={style.btn}>Login</button>
        <button className={style.btn}>sign Up</button>
      </div>
    </div>
  );
}

export { Header };
