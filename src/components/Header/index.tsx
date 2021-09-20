import logoSvg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dt money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}