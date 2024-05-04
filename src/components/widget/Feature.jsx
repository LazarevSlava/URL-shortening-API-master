import { Title } from '../elements/Title';
import { Text } from '../elements/Text';

function Feature({ title, text }) {
  return (
    <>
      <Title size="small">{title}</Title>
      <Text size="normal">{text}</Text>
    </>
  );
}
export { Feature };
