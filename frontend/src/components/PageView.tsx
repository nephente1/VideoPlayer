import { Header } from './Header/Header';
import { AppLayout, Container, Footer } from './styles';

export const PageView = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppLayout>
      <Header />
      <Container>
        {children}
      </Container>
      <Footer />
    </AppLayout>
  );
};
