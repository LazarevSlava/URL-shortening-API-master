import style from './Main.module.css';
import person from '../../images/illustration-working.svg?react';
import brand from '../../images/icon-brand-recognition.svg?react';
import detailed from '../../images/icon-detailed-records.svg?react';
import fully from '../../images/icon-fully-customizable.svg?react';

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
        <img className={style.person} src={person} alt="person" />
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
            <img src={brand} alt="brand" />
          </div>
          <h2 className={style.h}>Brand Recognition</h2>
          <p className={style.p}>
            Boost your brand recognition with each click. Generic links don&apos;t mean a thing.
            Branded links help instil confidence in your content.
          </p>
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <img src={detailed} alt="detailed" />
          </div>
          <h2 className={style.h}>Detailed Records</h2>
          <p className={style.p}>
            Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.
          </p>
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <img src={fully} alt="fully" />
          </div>
          <h2 className={style.h}>Fully Customizable</h2>
          <p className={style.p}>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </section>
      </div>
    </div>
  );
}
export { Main };
