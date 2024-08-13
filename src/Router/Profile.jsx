import React from "react"
import Card from 'react-bootstrap/Card';
import card1 from './card1.jpg';
import card2 from './card2.jpg';

function Profile() {
    return (
        <div className="container-fluid">
            <h1>Independence Day Celebration</h1>
            <p>The Independence Day of India, which is celebrated religiously throughout the Country on the 15th of August every year, holds tremendous ground in the list of national days, since it reminds every Indian about the dawn of a new beginning, the beginning of an era of deliverance from the clutches of British colonialism of more than 200 years. It was on 15th August 1947 that India was declared independent from British colonialism, and the reins of control were handed over to the leaders of the Country. India's gaining of independence was a tryst with destiny, as the struggle for freedom was a long and tiresome one,
                witnessing the sacrifices of many freedom fighters, who laid down their lives on the line.</p>
            <div className="row">
                <div className="col-6"> 
                     <Card style={{ width: '38rem' }} >
                    <img variant="top" src={card1} alt="card1.jpg" />
                    <Card.Body>
                        <Card.Title>Freedom fighters</Card.Title>
                        <Card.Text>
                            Freedom fighters are people who fought to free their country from an oppressor. They often face hardships in the process of securing the freedom of their country and people. Because of the
                            freedom fighters who fought for Indian independence, we celebrate Independence Day on August 15 every year.
                        </Card.Text>
                    </Card.Body>
                </Card></div>

                <div className="col-6"> 
                    <Card style={{ width: '38rem'}}>
                    <img variant="top" src={card2} alt="card2.jpg"style={{height: '18rem'}}/>
                    <Card.Body>
                        <Card.Title>patriotism</Card.Title>
                        <Card.Text>
                            Many people still continue to serve their country with as much devotion. Indian freedom fighters were filled with the feeling of
                            patriotism. They did not care about themselves and worked selflessly for the nation. Even today, many people are dedicated towards serving the nation in whatever way they can.
                        </Card.Text>
                    </Card.Body>
                </Card></div>

            </div>
        </div>
    );

}

export default Profile;