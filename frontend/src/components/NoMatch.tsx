import { Link } from 'react-router-dom';
import { Container } from './styles';


export const NoMatch = () => {
  return (
    <Container>
      <h2>Nothing to see here!</h2>
      <p>Ups, page is not existing. Go back.</p>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </Container>
  );
};
