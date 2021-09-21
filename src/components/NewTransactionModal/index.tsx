import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'

import closeSvg from '../../assets/closeVector.svg'
import incomeSvg from '../../assets/Entradas.svg'
import outcomeSvg from '../../assets/Saidas.svg'


type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
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
            <button
              type="button"
            >
              <img src={incomeSvg} alt="Entrada"/>
              <span>Entrada</span>
            </button>
            <button
              type="button"
            >
              <img src={outcomeSvg} alt="Saída" />
              <span>Saída</span>
            </button>
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