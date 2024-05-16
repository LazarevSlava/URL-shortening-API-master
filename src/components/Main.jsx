import style from './Main.module.css';
import Brand from '../assets/icon-brand-recognition.svg?react';
import Detailed from '../assets/icon-detailed-records.svg?react';
import Fully from '../assets/icon-fully-customizable.svg?react';
import { Hero } from './widget/Hero';
import { Feature } from './widget/Feature';
import { ShortenField } from './widget/ShortenField';
import { useEffect, useState, useCallback } from 'react';
const myKey = import.meta.env.VITE_MY_SECRET_KEY;
import { endpoint } from '../constants/endpoint';
import { makeDataUrl } from '../helpers/makeObjectUrl';
import { DataLinks } from './widget/DataLinks';
import clsx from 'clsx';

function Main() {
  const [dataUrl, setDataUrl] = useState([]);
  const classNamesSecondChild = clsx(style.features, style.secondChild);
  const classNamesLastChild = clsx(style.features, style.lastChild);

  const makeShort = useCallback(
    async (longUrl) => {
      const updatedData = makeDataUrl(longUrl);

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': myKey,
          },
          body: JSON.stringify(updatedData),
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const jsonResponse = await response.json();

        const { shortUrl } = jsonResponse;

        const newDataUrl = { originalUrl: longUrl, shortUrl: shortUrl };
        const updatedDate = [...dataUrl, newDataUrl];
        localStorage.setItem('listOfUrl', JSON.stringify(updatedDate));

        setDataUrl(updatedDate);
      } catch (error) {
        console.log('Error shortening URL', error);
      }
    },
    [dataUrl],
  );

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('listOfUrl'));
    if (dataStorage) {
      setDataUrl(dataStorage);
    }
  }, []);

  return (
    <div className={style.main}>
      <Hero />
      <div className={style.shorted}>
        <div className={style.searchAndList}>
          <ShortenField makeShort={makeShort} />
          {dataUrl.length > 0
            ? dataUrl.map((item, index) => {
                return (
                  <DataLinks key={index} originalUrl={item.originalUrl} shortUrl={item.shortUrl} />
                );
              })
            : null}
        </div>
        <section className={style.advanced}>
          <Feature
            title="Advanced Statistics"
            text="Track how your links are performing across the web our advanced statistics dashboard"
          />
        </section>
        <div className={style.feature_block}>
          <section className={style.features}>
            <div className={style.icon}>
              <Brand />
            </div>
            <Feature
              title="Brand Recognition"
              text="Boost your brand recognition with each
            click. Generic links don't mean a thing. Branded links help instil confidence in your
            content."
            />
          </section>
          <hr className={style.line} />
          <section className={classNamesSecondChild}>
            <div className={style.icon}>
              <Detailed />
            </div>
            <Feature
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with
              your content helps inform better decisions."
            />
          </section>
          <hr className={style.line} />
          <section className={classNamesLastChild}>
            <div className={style.icon}>
              <Fully />
            </div>
            <Feature
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable links,
              supercharging audience engagement."
            />
          </section>
        </div>
      </div>
    </div>
  );
}
export { Main };
