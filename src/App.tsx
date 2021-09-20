import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
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
    <>
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <Modal
        isOpen={isNewTransactionFormOpen}
        onRequestClose={handleClosenNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}