import style from './DataLinks.module.css';
import { Text } from '../elements/Text';
import { Button } from '../elements/Button';

function DataLinks({ shortUrl, originalUrl }) {
  return (
    <div className={style.dataLinksBlock}>
      <Text sort="longUrl" size="large">
        {originalUrl}
      </Text>
      <hr className={style.hr} />
      <Text className={style.shortenedUrl} color="cyan" size="large">
        {shortUrl}
      </Text>
      <Button size="small" variant="normal-radius">
        Copy
      </Button>
    </div>
  );
}
export { DataLinks };
