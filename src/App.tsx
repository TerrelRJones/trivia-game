import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { store } from 'store';
import AppRoutes from 'AppRoutes';

import styled from 'styled-components';

import theme from 'styles/theme.styled';

const AppContainer = styled.body`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const App: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer>
            <AppRoutes />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
