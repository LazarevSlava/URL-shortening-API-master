import style from './ShortenField.module.css';
import { Button } from '../elements/Button';
import { useState, useRef } from 'react';
import { urlPattern } from '../../constants/regExp';

function ShortenField({ makeShort = Function.prototype }) {
  const [showError, setShowError] = useState(false);
  const inputRef = useRef(null);

  const handleShort = (e) => {
    e.preventDefault();

    const regex = new RegExp(urlPattern);
    const inputValue = inputRef.current.value.trim();
    if (inputValue === '' || !inputValue.match(regex)) {
      setShowError(true);
    } else {
      setShowError(false);
      makeShort(inputValue);
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleShort} className={style.field_block}>
      <input
        ref={inputRef}
        className={`${style.field} ${showError ? style.invalid : ''}`}
        type="text"
        placeholder="Shorten a link here..."
      />
      <div hidden={!showError} className={style.message}>
        Please add a link
      </div>
      <Button size="large" variant="normal-radius">
        Shorten it!
      </Button>
    </form>
  );
}
export { ShortenField };
