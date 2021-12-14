import './App.css';
import { Header } from './components/Header';
import { Total } from './components/Total';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <div>
      <GlobalProvider>
      <Header />
      <div className="container">
        <Total />
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalProvider>

    </div>
  );
}

export default App;
