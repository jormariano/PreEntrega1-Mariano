import { useTranslation } from 'react-i18next'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Languages from '../Languages/Languages'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

  const imgTitle = './img/img-title.png'
  const imgLogo = '/img/logo-landscapes.png'
  const imgLogin = '/icon/navbar_login.svg'

  const { t } = useTranslation(['global'])


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src={imgTitle} alt="Image logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/categoria/1">ITALIA</Nav.Link>
              <Nav.Link href="/categoria/2">TAILANDIA</Nav.Link>
              <Nav.Link href="/categoria/3">JAPÓN</Nav.Link>
              <Nav.Link href="/categoria/4">ESPAÑA</Nav.Link>
              <Languages className='navbar-languages' />
            </Nav>
            <Nav>
              <Nav.Link href="/contact">CONTACTO</Nav.Link>
              <Nav.Link href="/login">LOGIN</Nav.Link>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default NavBar