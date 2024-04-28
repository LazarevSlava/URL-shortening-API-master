import style from './ShortenField.module.css';
import { Button } from '../elements/Button';
import { useState, useRef } from 'react';

function ShortenField() {
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  const handleShort = () => {
    const urlPattern =
      /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/gi;
    const regex = new RegExp(urlPattern);
    const inputValue = inputRef.current.value.trim();
    if (inputValue === '' || !inputValue.match(regex)) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  return (
    <div className={style.field_block}>
      <input
        ref={inputRef}
        className={`${style.field} ${showError ? style.invalid : ''}`}
        type="text"
        placeholder="Shorten a link here..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleShort();
        }}
      />
      <div className={`${style.message} ${showError ? '' : style.hidden}`}>Please add a link</div>
      <Button size="large" variant="normal-radius" onClick={handleShort}>
        Shorten it!
      </Button>
    </div>
  );
}
export { ShortenField };
