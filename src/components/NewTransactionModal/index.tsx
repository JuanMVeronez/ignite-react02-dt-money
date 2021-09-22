import Modal from 'react-modal'
import { Container, RadioButton, TransactionTypeContainer } from './styles'

import closeSvg from '../../assets/closeVector.svg'
import incomeSvg from '../../assets/Entradas.svg'
import outcomeSvg from '../../assets/Saidas.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  function handleCreateNewTransaction (e: FormEvent) {
    e.preventDefault()

    const data ={
      title, 
      value, 
      type, 
      category,
    };

    api.post('/transactions', data)
  }

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

        <form onSubmit={handleCreateNewTransaction}>
          <input type="text" placeholder="Título"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <input type="number" placeholder="Valor"
            value={value}
            onChange={e => setValue(Number(e.target.value))}
          />

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

          <input type="text" placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Container>
    </Modal>
  )
}