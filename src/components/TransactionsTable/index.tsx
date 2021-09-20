import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>20/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel Ap.</td>
            <td className="withdraw">- R$1.000</td>
            <td>Casa</td>
            <td>12/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}