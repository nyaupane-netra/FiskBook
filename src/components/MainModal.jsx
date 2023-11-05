import { useState } from "react";
import {Modal, Button, Form} from 'react-bootstrap'


const MainModal = ({onPost}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [logoLink, setLogoLink] = useState('')
    const [siteLink, setSiteLink] = useState('')
    const [author, setAuthor] = useState('')


    const handleTitleInput = (e) => {
        setTitle(e.target.value)
      }
    const handleDescriptionInput = (e) => {
        setDescription(e.target.value)
    }
    const handleLogoInput = (e) => {
        setLogoLink(e.target.value)
        }
    const handleLinkInput = (e) => {
        setSiteLink(e.target.value)
        }
    const handleAuthorInput = (e) =>{
      setAuthor(e.target.value)
      
    }

    const handlePost = () => {
        handleClose()
        onPost(title, author, description, logoLink, siteLink)
        }
return (
  <>
    <Button primary onClick={handleShow} style={{marginBottom: '1rem'}}> Add a new Annoucement or Opportunity</Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new posting</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Enter title" onChange={handleTitleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control placeholder="Enter name of Author" onChange={handleAuthorInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control  placeholder="Enter description" onChange={handleDescriptionInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLogo">
            <Form.Label>Logo Link</Form.Label>
            <Form.Control  placeholder="Enter link to logo" onChange={handleLogoInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLink">
            <Form.Label>Link to Site</Form.Label>
            <Form.Control  placeholder="Enter link to site" onChange={handleLinkInput}/>
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handlePost}>
          Post
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    )


}

export default MainModal
