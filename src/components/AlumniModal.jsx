import { useState } from "react";
import {Modal, Button, Form} from 'react-bootstrap';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase.js';


const AlumniModal = ({onPost}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [classValue, setClass] = useState('');
    const [major, setMajor] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [bio, setBio] = useState('');
    const [todos, setTodos] = useState([]);


    const handleName = (e) => {
        setName(e.target.value)
      }
    const handleImage = (e) => {
        setImage(e.target.value)
    }
    const handleClass = (e) => {
        setClass(e.target.value)
        }
    const handleMajor = (e) => {
        setMajor(e.target.value)
        }
    const handleCompany = (e) =>{
      setCompany(e.target.value)
    }
    const handleRole = (e) =>{
        setRole(e.target.value)
      }
      const handleBio = (e) =>{
        setBio(e.target.value)
      }

    const addAlumni = async (e) => {
    e.preventDefault();  
    
    try {
        const docRef = await addDoc(collection(db, "todos"), {
            name: name,
            image: image,
            classValue: classValue,
            major: major,
            company: company,
            role: role,
            bio: bio
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
}

return (
  <>
    <Button primary onClick={handleShow} style={{marginBottom: '1rem'}}> Add an Alumnus</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add an alumnus</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" onChange={handleName} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control placeholder="Enter Image URL" onChange={handleImage} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Class</Form.Label>
            <Form.Control  placeholder="Enter Class" onChange={handleClass} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLogo">
            <Form.Label>Major</Form.Label>
            <Form.Control  placeholder="Enter Major" onChange={handleMajor}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Company</Form.Label>
            <Form.Control  placeholder="Enter Company" onChange={handleCompany}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Role</Form.Label>
            <Form.Control  placeholder="Enter Job Role" onChange={handleRole}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Bio</Form.Label>
            <Form.Control  placeholder="Enter Bio" onChange={handleBio}/>
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={addAlumni}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    )


}

export default AlumniModal
