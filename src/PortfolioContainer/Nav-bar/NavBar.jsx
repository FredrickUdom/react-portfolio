import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'


function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-area text-primary">
      <Container className='logo'>
        <Navbar.Brand a href=".profile-container">FREDRICK <br /><span>UDOM</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto linkText">
            <div className="home">
            <Nav.Link a href=".profile-container">Home</Nav.Link>
            </div>
            <Nav.Link a href="#about">About</Nav.Link>
            <Nav.Link a href="#skills">Skills</Nav.Link>
            <Nav.Link a href="#project">Projects</Nav.Link>
            <Nav.Link a href="#connect">Connect</Nav.Link>
            {/* <NavDropdown title="DropdownFred" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    
  );
}

export default NavBar;