import style from './InfoBlock.module.css';

function InfoBlock(props) {
  return (
    <>
      <h2>{props.h}</h2>
      <p className={style.p}>{props.p}</p>
    </>
  );
}

export { InfoBlock };
