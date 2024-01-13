import { BingoProvider } from 'components/bingoContext';
import AppUI from './AppUI';

function App() {
  return (
    <BingoProvider>
      <AppUI />
    </BingoProvider>
  );
}
export default App;
