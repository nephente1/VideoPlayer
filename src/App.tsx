import { DataProvider } from './components/DataProvider';
import { RouterComponent } from './components/RoutingComponent';
import { GlobalStyle, THEME } from './shared/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const App = () => {
  return (
    <DataProvider>
      <StyledThemeProvider theme={THEME}>
        <GlobalStyle />
        <RouterComponent />
      </StyledThemeProvider>
    </DataProvider>
  );
};

export default App;
