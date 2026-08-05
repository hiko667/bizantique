import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu(){
    
    return(
    <Navbar expand="lg" className="bg-dark z-1000">
        <Navbar.Toggle color="white"/>
        <Container>
            <Navbar.Brand className="text-light" as={Link} to="/map">
            <img
                        alt=""
                        src="eye.png"
                        width="30"
                        height="30"
                        className="d-inline-block mx-3 align-top"
                        />
            Bizantique</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="mx-3 justify-content-end">
                <Nav.Link className="mx-3" as={Link} to="/map">Mapa</Nav.Link>
                {/* <Nav.Link className="mx-3" as={Link} to="/data">Baza Wiedzy</Nav.Link> */}
                <Nav.Link className="mx-3" as={Link} to="/races">Rasy Ignis</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}