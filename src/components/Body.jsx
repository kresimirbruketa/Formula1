import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import {Button} from "react-bootstrap";


function Body(){
    return(
        <div>
            <hr className="contentDevider"/>
            <h2>
            Latest news 
            </h2>

            <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://www.formula1.com/content/dam/fom-website/races/2023/race-listing/Bahrain%20Testing.jpg.transform/9col/image.jpg" />
                <Card.Body>
                    <Card.Title>Top 10 F1 drivers of 2022</Card.Title>
                    <Card.Text>
                        In the fifth running of our Drivers Driver of the Year vote, 
                        we asked this years full-time drivers to assess their rivals 
                        performance on track and create their personal top 10 ranking.
                    </Card.Text>
                    <Button href="https://www.formula1.com/en/latest/article.exclusive-the-top-10-f1-drivers-of-2022-as-chosen-by-the-drivers.2NOuQvCliYsI3wHVGTIZwS.html" 
                    variant="danger">Read more...</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/PostSeason/MR_2022_GP-ABU-DHABI_-SUNDAY051.jpg.transform/9col/image.jpg" />
                <Card.Body>
                    <Card.Title>The F1 team bosses choose their top 10 drivers of 2022</Card.Title>
                    <Card.Text>
                    Formula 1’s team principals have voted Max Verstappen as their number 
                    one driver of the year for the second successive season in our annual poll, 
                    following the Red Bull driver’s successful defence of his title.
                    </Card.Text>
                    <Button href="https://www.formula1.com/en/latest/article.revealed-the-f1-team-bosses-choose-their-top-10-drivers-of-2022.2glaMF3Vu9RSSBZmjwhCBM.html" 
                    variant="danger">Read more...</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://www.formula1.com/content/dam/fom-website/manual/Misc/best%20race%202022.jpg.transform/9col/image.jpg" />
                <Card.Body>
                    <Card.Title>What was your favourite race of 2022?</Card.Title>
                    <Card.Text>
                    F1 put on another spectacular display during 2022’s whistle-stop tour
                     of the globe, with all-new technical regulations providing plenty of 
                     action, drama and intrigue.
                    </Card.Text>
                    <Button href="https://www.formula1.com/en/latest/article.vote-what-was-your-favourite-race-of-2022-pick-the-best-grand-prix-of-the.3ipmXy8Ahrin8FIJjdsUBr.html" 
                    variant="danger">Read more...</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        
        

        </div>
    )
}

export default Body;