import { useState } from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase.js';


const MainModal = ({onPost}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [By, setBy] = useState('');
    const [description, setDescription] = useState('');
    const [URL, setURL] = useState('');
    const [image, setImage] = useState('');
    const [opportunities, setOpportunities] = useState([]);


    const handleTitle = (e) => {
        setTitle(e.target.value)
      }
    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleBy = (e) => {
        setBy(e.target.value)
        }
    const handleDescription = (e) => {
        setDescription(e.target.value)
        }
    const handleURL = (e) =>{
      setURL(e.target.value)
    }
    const handleImage = (e) =>{
        setImage(e.target.value)
      }

    const addOpportunity = async (e) => {
    e.preventDefault();  
    
    try {
        const docRef = await addDoc(collection(db, "opportunities"), {
            title: title,
            type: type,
            By: By,
            description: description,
            URL: URL,
            image: image,
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}

return (
  <>
    <Button primary onClick={handleShow} style={{marginBottom: '1rem'}}> Add an Opportunity</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an opportunity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Opportunity Title</Form.Label>
            <Form.Control type="email" placeholder="Enter title" onChange={handleTitle} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Opportunity Type (Research, Internship, Study Abroad)</Form.Label>
            <Form.Control placeholder="Enter name of Author" onChange={handleType} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Posted By</Form.Label>
            <Form.Control  placeholder="Enter description" onChange={handleBy} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLogo">
            <Form.Label>Opportunity Description</Form.Label>
            <Form.Control  placeholder="Enter link to logo" onChange={handleDescription}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Application Link</Form.Label>
            <Form.Control  placeholder="Enter link to site" onChange={handleURL}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Opportunity Image</Form.Label>
            <Form.Control  placeholder="Enter link to site" onChange={handleImage}/>
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick = {addOpportunity}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    )


}

export default MainModal
