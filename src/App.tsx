import GlobalStyle from "./styles/global";
import Menu from "./components/Menu";
import RoutesApp from "./routes";
import { CookiesProvider } from 'react-cookie';
import { Providers } from "./contexts/contexts";
import Header from "./components/Header";
import Private from "./components/Private";

function App() {
  return (
    <CookiesProvider>
      <Providers>
        
        <GlobalStyle />
        
        <Private element={
          <Menu />
        } />

        <Header />
        <RoutesApp />

      </Providers>
    </CookiesProvider>
  );
}

export default App;
