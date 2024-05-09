import style from './DataLinks.module.css';
import { Text } from '../elements/Text';
import { Button } from '../elements/Button';
import { copyToClipboard } from '../../helpers/copyToClipboard';
import { useState } from 'react';

function DataLinks({ shortUrl, originalUrl }) {
  const [buttonText, setButtonText] = useState('Copy');
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
      <Button
        onClick={() => {
          {
            copyToClipboard(shortUrl);
            setButtonText('Copied');
          }
        }}
        size="small"
        variant="normal-radius"
      >
        {buttonText}
      </Button>
    </div>
  );
}
export { DataLinks };
