import { Container } from "./styles";

import incomeSvg from '../../assets/Entradas.svg'
import outcomeSvg from '../../assets/Saidas.svg'
import totalSvg from '../../assets/Total.svg'

export function Summury() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>

      <div className="totalContainer">
        <header>
          <p>Entradas</p>
          <img src={totalSvg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}