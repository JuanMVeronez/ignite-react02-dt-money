import { useState } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from './TransactionsContext';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [
    isNewTransactionFormOpen, 
    setIsNewTransactionFormOpen
  ] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionFormOpen(true)
  }
  
  function handleClosenNewTransactionModal() {
    setIsNewTransactionFormOpen(false)
  }

  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionFormOpen}
        onRequestClose={handleClosenNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}