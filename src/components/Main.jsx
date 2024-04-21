import style from './Main.module.css';
import Person from '../../images/illustration-working.svg?react';
import Brand from '../../images/icon-brand-recognition.svg?react';
import Detailed from '../../images/icon-detailed-records.svg?react';
import Fully from '../../images/icon-fully-customizable.svg?react';
import { InfoBlock } from '../InfoBlock';

function Main() {
  return (
    <div className={style.main}>
      <div className={style.more_img}>
        <section className={style.more}>
          <h1 className={style.more_then}>More than just shorter links</h1>
          <p className={style.p}>
            Build your brand&apos;s and get detailed insights on how your links are performing
          </p>
          <button className={style.getStarted}>Get Started</button>
        </section>
        <div className={style.svg}>
          <Person className={style.person} />
        </div>
      </div>
      <div className={style.shorted}>
        Search component
        <section className={style.advanced}>
          <h2 className={style.h}>Advanced Statistics</h2>
          <p className={style.p}>
            Track how your links are performing across the web our advanced statistics dashboard
          </p>
        </section>
        <section className={style.features}>
          <div className={style.icon}>
            <Brand />
          </div>
          <InfoBlock
            h={`Brand Recognition`}
            p={`Boost your brand recognition with each click. Generic links don't mean a thing.
            Branded links help instil confidence in your content.`}
          />
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <Detailed />
          </div>
          <InfoBlock
            h={`Detailed Records`}
            p={`Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.`}
          />
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <Fully />
          </div>
          <InfoBlock
            h={`Fully Customizable`}
            p={`Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.`}
          />
        </section>
      </div>
    </div>
  );
}
export { Main };
