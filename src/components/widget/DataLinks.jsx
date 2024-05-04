import style from './DataLinks.module.css';
import { Title } from '../elements/Title';
import { Button } from '../elements/Button';

function DataLinks({ children }) {
  return (
    <div className={style.dataLinksBlock}>
      <Title className={style.longUrl} tag="h3" size="small">
        jhjh
      </Title>
      <hr className={style.hr} />

      <Title className={style.shortenedUrl} tag="h3" color="cyan" size="small">
        jhjh
      </Title>
      <Button size="small" variant="normal-radius">
        Copy
      </Button>
    </div>
  );
}
export { DataLinks };
