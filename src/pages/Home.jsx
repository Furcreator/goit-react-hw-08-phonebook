import { Text } from 'components/App.styled';

export default function Home() {
  return (
    <div>
      <Text>
        Welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Text>
    </div>
  );
}
