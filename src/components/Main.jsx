import style from './Main.module.css';
import Brand from '../assets/icon-brand-recognition.svg?react';
import Detailed from '../assets/icon-detailed-records.svg?react';
import Fully from '../assets/icon-fully-customizable.svg?react';
import { Hero } from './widget/Hero';
import { Feature } from './widget/Feature';
import { ShortenField } from './widget/ShortenField';

function Main() {
  return (
    <div className={style.main}>
      <Hero />
      <div className={style.shorted}>
        <ShortenField />
        <section className={style.advanced}>
          <Feature
            title="Advanced Statistics"
            text="Track how your links are performing across the web our advanced statistics dashboard"
          />
        </section>
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
        <section className={style.features}>
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
        <section className={style.features}>
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
  );
}
export { Main };
