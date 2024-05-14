import style from './LinksBlock.module.css';
import { Title } from '../elements/Title';

function LinksBlock({ title, linkList }) {
  return (
    <>
      <Title tag="h3" color="white" size="small">
        {title}
      </Title>
      <ul className={style.linkList}>
        {linkList.map((link, index) => {
          return (
            <li key={index} className={style.link}>
              {link}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export { LinksBlock };
