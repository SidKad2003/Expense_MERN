import './App.css';
import { Addtransaction } from './components/Addtransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
// import { GlobalContext, GlobalProvider } from './context/Globalstate';
import { GlobalProvider } from './context/Globalstate';


function App() {
  return (
    // <div >
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <Addtransaction />
        </div>
      </GlobalProvider>

    // </div>
  );
}

export default App;
