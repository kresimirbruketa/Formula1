import React from "react";

import { Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

function Footer(){
    return (
        
        <div className="footer">

        <Navbar>

            <Row className="mx-auto">
                <Col>
                    <Button href="https://www.facebook.com/Formula1/" className="rounded-circle" variant="outline-off"> <FaFacebook/> </Button>
                </Col>
                <Col>
                    <Button href="https://twitter.com/f1" className="rounded-circle" variant="outline-off"> <FaTwitter/> </Button>
                </Col>
                <Col>
                    <Button href="https://www.instagram.com/f1/" className="rounded-circle" variant="outline-off"> <FaInstagram/> </Button>
                </Col>
            </Row>    
        </Navbar>
           
        </div>
    )
}

export default Footer;