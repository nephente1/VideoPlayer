import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { GlobalStyle, THEME } from './shared/theme';
import { RouterComponent } from './components/RoutingComponent';
import { DataProvider } from './components/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <StyledThemeProvider theme={THEME}>
        <GlobalStyle />
        <RouterComponent />
      </StyledThemeProvider>
    </DataProvider>
    
  );
}

export default App;
