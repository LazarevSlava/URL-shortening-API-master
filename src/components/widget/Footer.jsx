import style from './Footer.module.css';
import { Title } from '../elements/Title';
import { Button } from '../elements/Button';

function Footer() {
  return (
    <>
      <div className={style.bg}>
        <Title tag="h2" size="small" color="white">
          Boost your links today
        </Title>
        <Button size="medium" variant="big_radius">
          Get Started
        </Button>
      </div>
      <div className={style.down_block}></div>
    </>
  );
}
export { Footer };
