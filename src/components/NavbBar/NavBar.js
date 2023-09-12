import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Brand  className="text-light"> E-Commerce🛒</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Button variant="outline-primary">Arquitectónica</Button>
                <Button variant="outline-primary">Diluyentes</Button>
                <Button variant="outline-primary">Industria</Button>
                <Button variant="outline-primary">Automotor</Button>
                <Button variant="outline-primary">Artistica</Button>
            </Navbar.Collapse>
            <CartWidget />
        </Navbar>
    );
};

export default NavBar;
