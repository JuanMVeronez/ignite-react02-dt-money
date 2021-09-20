import logoSvg from '../../assets/logo.svg'
import { Container, Content } from './styles'

type HeaderProps = {
  onOpenNewTransactionsModal: () => void
}

export function Header({onOpenNewTransactionsModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>
          <img src={logoSvg} alt="dt money" />
        </h1>
        <button type="button" onClick={onOpenNewTransactionsModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}