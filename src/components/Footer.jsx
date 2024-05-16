import style from './Footer.module.css';
import { Title } from './elements/Title';
import { Button } from './elements/Button';
import Logo from './elements/Logo';
import { LinksBlock } from './widget/LinksBlock';
import { SocialIcons } from './widget/SocialIcons';

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
      <div className={style.down_block}>
        <Logo className={style.logo} fill="white" />

        <div className={style.feature}>
          <LinksBlock
            title="Features"
            linkList={['Link', 'Shortening', 'Branded Links', 'Analytics']}
          />
        </div>
        <div className={style.feature}>
          <LinksBlock title="Resources" linkList={['Blog', 'Developers', 'Support']} />
        </div>
        <div className={style.feature}>
          <LinksBlock title="Company" linkList={['About', 'Our Team', 'Careers', 'Contact']} />
        </div>

        <SocialIcons />
      </div>
    </>
  );
}
export { Footer };
