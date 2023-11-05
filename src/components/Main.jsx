import React, { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Card, Button, Container} from "react-bootstrap"
import { MainModal } from "."
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase.js';

const Main = () =>{
    const [opportunities, setOpportunities] = useState([]);
    const fetchPost = async () => {
        await getDocs(collection(db, "opportunities"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setOpportunities(newData);                
                console.log(opportunities, newData);
            })
    }
 

    useEffect(()=>{
        fetchPost();
    }, [])

    return (
        <>
        <Container fluid style={{'margin': '0', 'height': '100%', 'padding': '0'}}>
            <Row className="text-center" style={{'height': '100%', 'margin': '0'}}>
                <Col xs={3} >
                </Col>
                <Col  md>
                <br/><br/><br/>
                    <h1 style={{fontSize: '30px', color: 'black', marginTop:"20px", fontFamily:"Arial, Helvetica, sans-serif;"}}>Announcements and Opportunities</h1>
                    <br/><br/>
                    <MainModal/>
                    
                    {
                        opportunities?.map((opportunity, i)=> (
                            <Card style={{ width: '100%', heigth: '30rem', backgroundColor: '#A9B0AC', marginBottom: '1rem' }}>
                                <Card.Img variant="top" src={opportunity.image}  style={{width:'150px',left:'40%', position: 'relative', marginTop: '1rem'}}/>
                                <Card.Body>
                                <Card.Title>{opportunity.title}</Card.Title>
                                <Card.Text>Opportunity Type: {opportunity.type}</Card.Text>
                                <Card.Text>Posted by: {opportunity.By}</Card.Text>
                                <Card.Text>
                                    {opportunity.description}</Card.Text>
                                <Button variant="primary" href={opportunity.URL}>Apply on Site!</Button>
                                </Card.Body>
                            </Card>
                        ))
                        }
                </Col>
                <Col xs={3}>
                    
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Main