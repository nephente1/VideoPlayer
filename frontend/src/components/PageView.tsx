import { Header } from './Header/Header';
import { AppLayout, Container, Footer } from './styles';
import { Outlet } from 'react-router';

export const PageView = () => {
  return (
    <AppLayout>
      <Header />
      <Container>
        {/* Outlet Renders the child route's elements, if there is one. */}
        <Outlet />
      </Container>
      <Footer />
    </AppLayout>
  );
};
