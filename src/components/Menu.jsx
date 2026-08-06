import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Menu(){
    return(
    <Navbar expand="lg" aria-controls="basic-navbar-nav" className="bg-dark navbar-dark z-1000 ">
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark" /> */}
        <Container>
            <Navbar.Brand className="text-light" as={Link} to="/">
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
                <Nav.Link className="mx-3" as={Link} to="/factions">Frakcje</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/races">Rasy Ignis</Nav.Link>
                <Nav.Link className="mx-3" as={Link} to="/equipment">Ekwipunek</Nav.Link>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}