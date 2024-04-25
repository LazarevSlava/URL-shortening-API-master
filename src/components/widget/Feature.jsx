import { Title } from '../elements/Title';
import { Text } from '../elements/Text';

function Feature({ title, text }) {
  return (
    <>
      <Title size="small">{title}</Title>
      <Text>{text}</Text>
    </>
  );
}
export { Feature };
