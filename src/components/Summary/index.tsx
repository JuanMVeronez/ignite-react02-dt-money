import { Container } from "./styles";

import incomeSvg from '../../assets/Entradas.svg'
import outcomeSvg from '../../assets/Saidas.svg'
import totalSvg from '../../assets/Total.svg'
import { useTransactions } from "../../hooks/useTransactions";

export function Summary() {
  const { transactions } = useTransactions() 
  
  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraw += transaction.amount
      acc.total -= transaction.amount
    }
    return acc
  }, {deposit: 0, withdraw: 0, total: 0})

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)
        }</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)
        }</strong>
      </div>

      <div className="totalContainer">
        <header>
          <p>Entradas</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)  
        }</strong>
      </div>
    </Container>
  )
}