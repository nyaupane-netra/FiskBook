import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import {db} from './firebase.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AlumniModal from './AlumniModal.jsx';
import './Connect.css';
 
 
const Todo = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [classValue, setClass] = useState('');
    const [major, setMajor] = useState('');
    const [company, setCompany] = useState('');
    const [role, setRole] = useState('');
    const [bio, setBio] = useState('');
    const [todos, setTodos] = useState([]);
 
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
 
    const fetchPost = async () => {
       
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{              
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                setTodos(newData);                
                console.log(todos, newData);
            })
       
    }
   
    useEffect(()=>{
        fetchPost();
    }, [])
 
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h3 className="header">
                    Add an alumnus
                </h3>
                <AlumniModal />
   
                <div className="card-container">
                    {
                        todos?.map((todo,i)=>(
                            <Card style={{ width: 'absolute' }} className="card">
                                <div className="card-img-container">
                                    <Card.Img variant="top" src={todo.image} style={{ width: "100px", height: "100px", borderRadius: "100%", marginTop: "10px"}} />
                                </div>
                                <Card.Body>
                                    <Card.Title>{todo.name}</Card.Title>
                                    <Card.Text>Class of: {todo.classValue}</Card.Text>
                                    <Card.Text>Major: {todo.major}</Card.Text>
                                    <Card.Text>Company: {todo.role}</Card.Text>
                                    <Card.Text>Role: {todo.role}</Card.Text>
                                    <Card.Text>Bio: {todo.bio}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
 
export default Todo