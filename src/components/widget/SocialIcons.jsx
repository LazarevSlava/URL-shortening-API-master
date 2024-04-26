import style from './SocialIcons.module.css';
import FaceBook from '../../assets/icon-facebook.svg?react';
import Twitter from '../../assets/icon-twitter.svg?react';
import Instagram from '../../assets/icon-instagram.svg?react';
import Pinterest from '../../assets/icon-pinterest.svg?react';

function SocialIcons() {
  return (
    <div className={style.icons}>
      <FaceBook />
      <Twitter />
      <Pinterest />
      <Instagram />
    </div>
  );
}
export { SocialIcons };
