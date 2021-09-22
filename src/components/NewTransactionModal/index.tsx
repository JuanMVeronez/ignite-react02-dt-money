import Modal from 'react-modal'
import { Container, RadioButton, TransactionTypeContainer } from './styles'

import closeSvg from '../../assets/closeVector.svg'
import incomeSvg from '../../assets/Entradas.svg'
import outcomeSvg from '../../assets/Saidas.svg'
import { useState } from 'react'


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeSvg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <form>
          <input type="text" placeholder="Título"/>
          <input type="number" placeholder="Valor"/>

          <TransactionTypeContainer>
            <RadioButton
              type="button"
              onClick={() => {setType('deposit')}}
              isActive={type === 'deposit'}
              colorWhenActive="green"
            >
              <img src={incomeSvg} alt="Entrada"/>
              <span>Entrada</span>
            </RadioButton>
            <RadioButton
              type="button"
              onClick={() => {setType('withdraw')}}
              isActive={type === 'withdraw'}
              colorWhenActive="red"
            >
              <img src={outcomeSvg} alt="Saída" />
              <span>Saída</span>
            </RadioButton>
          </TransactionTypeContainer>

          <input type="text" placeholder="Categoria"/>
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Container>
    </Modal>
  )
}