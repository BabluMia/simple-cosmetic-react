import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = ({count}) => {
    
  return (
    <div>
      <>
        <Navbar className="ps-5" bg="dark" variant="dark">
          <Container className="w-75 mx-auto">
            <Navbar.Brand href="#home">GRAB YOU'R ITEM</Navbar.Brand>
            <Nav className="me-5 pe-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#item">Item <sup>{count}</sup></Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
