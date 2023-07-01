import { Thumb } from 'components/App.styled';
import gif from '../image/0001.gif';
export default function Home() {
  return (
    <Thumb>
      <img src={gif} alt="phone-book" width="550px" />
    </Thumb>
  );
}
