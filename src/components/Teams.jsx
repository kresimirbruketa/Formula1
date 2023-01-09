import React from "react";
import { Card } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";


function Teams(){
    return(
        <div>
            <Row style={{margin: "1px 5%"}} xs={1} md={2} lg= {2} className="g-4">      
                <Col>
                <Card.Link as={Link} to="/alfaromeo">
                <Card className="text-center" >
                    <CardHeader as="h3">
                        Alfa Romeo
                    </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo-logo.png.transform/2col/image.png"/>
                    <Card.Body>
                    <div>
                    <img className="teamCar" alt="alfa" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>
                
                <Col>
                <Card.Link as={Link} to="/alfatauri">
                <Card className="text-center" >
                <CardHeader as="h3">
                    AlfaTauri
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>
                
                <Col>
                <Card.Link as={Link} to="/alpine">
                <Card className="text-center" >
                <CardHeader as="h3">
                    Alpine
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alpine-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/alpine.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>
                
                <Col>
                <Card.Link as={Link} to="/astonmartin">
                <Card className="text-center" >
                <CardHeader as="h3">
                    Aston Martin
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/aston-martin-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/aston-martin.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>
                
                <Col>
                <Card.Link as={Link} to="/ferrari">
                <Card className="text-center" >
                <CardHeader as="h3">
                    Ferrari
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/ferrari-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/ferrari.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>

                <Col>
                <Card.Link as={Link} to="/haas">
                <Card className="text-center" >
                <CardHeader as="h3">
                    Haas
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/haas-f1-team-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>

                <Col>
                <Card.Link as={Link} to="/mclaren">
                <Card className="text-center" >
                <CardHeader as="h3">
                    McLaren
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/mclaren-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/mclaren.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>

                <Col>
                <Card.Link as={Link} to="/mercedes">
                <Card className="text-center" >
                <CardHeader as="h3">
                    Mercedes
                </CardHeader>
                    <Card.Img className="teamLogo" variant="top" src="https://www.formula1.com/content/dam/fom-website/teams/2023/mercedes-logo.png.transform/2col/image.png" />
                    <Card.Body>
                    <div>
                    <img alt="alfatauri" src="https://www.formula1.com/content/dam/fom-website/teams/2023/mercedes.png.transform/4col/image.png"/>
                    </div>
                    </Card.Body>
                </Card>
                </Card.Link>
                </Col>


            </Row>

        </div>
    )
};



export default Teams;