import React, { useEffect } from "react"
import { useState } from "react"
import { Row, Col, Card, Button, Container} from "react-bootstrap"
import { MainModal } from "."

const Main = () =>{
    const [posts, setPosts] = useState([])

    const addPost = (title,postedBy, description, logo, link) => {
        setPosts([
            {
                'title': title,
                'postedBy': postedBy,
                'description': description,
                'link': link,
                'picture': logo
            },
            ...posts
        ])
        
    }
 

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/christnm/fiskbookapp/master/data.json")
    .then(response => response.json())
    .then((data) => {
        setPosts(data);
    });
    }, [])

    return (
        <>
        <Container fluid style={{'margin': '0', 'height': '100%', 'padding': '0'}}>
            <Row className="text-center" style={{'height': '100%', 'margin': '0'}}>
                <Col xs={3} >
                </Col>
                <Col  md>
                    <h1 style={{fontSize: '50px', color: '#FFF'}}>Announcements and Opportunities</h1>
                    <MainModal onPost={addPost}/>
                    {posts.reverse().map(co => (
                        <Card style={{ width: '100%', heigth: '30rem', backgroundColor: '#A9B0AC', marginBottom: '1rem' }}>
                        <Card.Img variant="top" src={co.picture}  style={{width:'150px',left:'40%', position: 'relative', marginTop: '1rem'}}/>
                        <Card.Body>
                          <Card.Title>{co.title}</Card.Title>
                          <Card.Text>Posted by: {co.postedBy}</Card.Text>
                          <Card.Text>
                            {co.description}
                          </Card.Text>
                          <Button variant="primary" href={co.link}>Apply on Site!</Button>
                        </Card.Body>
                      </Card>

                    ))}
                </Col>
                <Col xs={3}>
                    
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Main