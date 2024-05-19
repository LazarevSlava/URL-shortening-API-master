import style from './Hero.module.css';
import { Title } from '../elements/Title';
import { Text } from '../elements/Text';
import { Button } from '../elements/Button';
import Person from '../../assets/illustration-working.svg?react';

function Hero() {
  return (
    <div className={style.description_img}>
      <section className={style.description}>
        <Title tag="h1" size="normal">
          More than just shorter links
        </Title>
        <Text>
          Build your brand&apos;s and get detailed insights on how your links are performing
        </Text>
        <Button size="medium" variant="big_radius">
          Get Started
        </Button>
      </section>
      <div className={style.svg}>
        <Person className={style.person} />
      </div>
    </div>
  );
}
export { Hero };
