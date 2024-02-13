
import { CryptoContextProvider } from "./context/crypto-context";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
};

export default App;
