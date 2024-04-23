import style from './Main.module.css';
import Person from '../assets/illustration-working.svg?react';
import Brand from '../assets/icon-brand-recognition.svg?react';
import Detailed from '../assets/icon-detailed-records.svg?react';
import Fully from '../assets/icon-fully-customizable.svg?react';
import { Button } from './Button';
import { Text } from './Text';
import { Title } from './Title';

function Main() {
  return (
    <div className={style.main}>
      <div className={style.more_img}>
        <section className={style.more}>
          <Title size={'normal'}>More than just shorter links</Title>
          <p className={style.p}>
            Build your brand&apos;s and get detailed insights on how your links are performing
          </p>
          <Button size={'medium'} variant={'big_radius'}>
            Get Started
          </Button>
        </section>
        <div className={style.svg}>
          <Person className={style.person} />
        </div>
      </div>
      <div className={style.shorted}>
        Search component
        <section className={style.advanced}>
          <Title size={'small'}>Advanced Statistics</Title>
          <Text>
            Track how your links are performing across the web our advanced statistics dashboard
          </Text>
        </section>
        <section className={style.features}>
          <div className={style.icon}>
            <Brand />
          </div>
          <Title size={'small'}>Brand Recognition</Title>
          <Text>
            Boost your brand recognition with each click. Generic links don&apos;t mean a thing.
            Branded links help instil confidence in your content.
          </Text>
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <Detailed />
          </div>
          <Title size={'small'}>Detailed Records</Title>
          <Text>
            Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.
          </Text>
        </section>
        <hr className={style.line} />
        <section className={style.features}>
          <div className={style.icon}>
            <Fully />
          </div>
          <Title size={'small'}>Fully Customizable</Title>
          <Text>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </Text>
        </section>
      </div>
    </div>
  );
}
export { Main };
