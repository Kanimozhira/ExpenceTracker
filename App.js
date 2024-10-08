import './App.css';
import Balance from './Balance';
import Header from './Header';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './Context/GlobleState';
import NewTransactionList from './NewTransactionList';
import NewIncomeExpenses from './Components/NewIncomeExpenses';


function App() {
  return (
   <GlobalProvider>
   <Header />
   <div className="container">
    <Balance />
    <NewIncomeExpenses />
    <NewTransactionList />
    <AddTransaction />
   </div>
   </GlobalProvider>
  );
}

export default App;