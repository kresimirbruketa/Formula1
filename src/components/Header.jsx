import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Dropdown, NavDropdown } from "react-bootstrap";
import {Link} from "react-router-dom";




function Header(){

    return (
        <div>
                    
            <Navbar className="navbar fw-bold" collapseOnSelect expand="lg" fixed="top" variant="dark">
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg"
                            width="130"
                            height="32.5"
                            className="d-inline-block align-top"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        
                        <Nav.Link as={Link} to="/" className="navLink">Home</Nav.Link>
                        
                        <NavDropdown title="Teams" id="navbarScrollingDropdown">
                            {/* renderMenuOnMount={true}> ovo ti je potrebno za hover dropdown*/}
                            <NavDropdown.Item href="/teams">All Teams</NavDropdown.Item>
                            <Dropdown.Divider/>
                            <NavDropdown.Item href="/alfaromeo">Alfa Romeo</NavDropdown.Item>
                            <NavDropdown.Item href="/alfatauri">AlfaTauri</NavDropdown.Item>
                            <NavDropdown.Item href="/alpine">Alpine</NavDropdown.Item>
                            <NavDropdown.Item href="/astonmartin">Aston Martin</NavDropdown.Item>
                            <NavDropdown.Item href="/ferrari">Ferrari</NavDropdown.Item>
                            <NavDropdown.Item href="/haas">Haas</NavDropdown.Item>
                            <NavDropdown.Item href="/mclaren">McLaren</NavDropdown.Item>
                            <NavDropdown.Item href="/mercedes">Mercedes</NavDropdown.Item>
                            <NavDropdown.Item href="/redbull">RedBull</NavDropdown.Item>
                            <NavDropdown.Item href="/williams">Williams</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Drivers" id="navbarScrollingDropdown"> 
                            {/* renderMenuOnMount={true}> ovo ti je potrebno za hover dropdown*/}    
                            <NavDropdown.Item href="/drivers">All Drivers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/verstapen">Max Verstapen</NavDropdown.Item>
                            <NavDropdown.Item href="/perez">Sergio Perez</NavDropdown.Item>
                            <NavDropdown.Item href="/leclerc">Charles LeClerc</NavDropdown.Item>
                            <NavDropdown.Item href="/sainz">Carlos Sainz</NavDropdown.Item>
                            <NavDropdown.Item href="/hamilton">Lewis Hamilton</NavDropdown.Item>
                            <NavDropdown.Item href="/russel">George Russel</NavDropdown.Item>
                            <NavDropdown.Item href="/norris">Lando Norris</NavDropdown.Item>
                            <NavDropdown.Item href="/piastri">Oscar Piastri</NavDropdown.Item>
                            
                        </NavDropdown>
                        <Nav.Link className="navLink" as={Link} to="/schedule">Schedule</Nav.Link>
                        <Nav.Link className="navLink" as={Link} to="/tires" >Tires</Nav.Link>
                        <Nav.Link className="navLink" as={Link} to="/standings">Standings</Nav.Link>
                    </Nav> 
                    </Navbar.Collapse>               
            </Navbar>
            
           
        </div> 
    )
}


export default Header;