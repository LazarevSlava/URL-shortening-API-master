import style from './DataLinks.module.css';
import { Text } from '../elements/Text';
import { Button } from '../elements/Button';

function DataLinks({ shortUrl, originalUrl }) {
  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(text);
      })
      .catch((err) => {
        console.error('Failed to copy data', err);
      });
  }
  return (
    <div className={style.dataLinksBlock}>
      <div className={style.longUrl}>
        <Text sort="longUrl" size="large">
          {originalUrl}
        </Text>
      </div>
      <hr className={style.hr} />
      <Text className={style.shortenedUrl} color="cyan" size="large">
        {shortUrl}
      </Text>
      <Button onClick={() => copyToClipboard(shortUrl)} size="small" variant="normal-radius">
        Copy
      </Button>
    </div>
  );
}
export { DataLinks };
