
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const Chat = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const messageInputRef = useRef(null);

//   const handleSendMessage = () => {
//     if (newMessage.trim() !== "" && selectedUser) {
//       setMessages([...messages, { text: newMessage, sender: "user" }]);
//       setNewMessage("");
//     }
//   };

//   useEffect(() => {
//     if (messageInputRef.current) {
//       messageInputRef.current.focus();
//     }
//   }, [messages]);

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <div className="chat-container">
//       {selectedUser && (
//         <div className="selected-user">
//           <h3>Chatting with {selectedUser}</h3>
//         </div>
//       )}
//       {selectedUser ? (
//         <div className="chat-messages">
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.sender}`}>
//               {message.text}
//             </div>
//           ))}
//           <div className="chat-input">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={newMessage}
//               onChange={(e) => setNewMessage(e.target.value)}
//               ref={messageInputRef}
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         </div>
//       ) : (
//         <div className="profile-section">
//           <h3>My Chats</h3>
//         <Card style={{ height:"50px", width: '400px' }}>
//             <Card.Img variant="top" src="https://media.licdn.com/dms/image/D5603AQHo7F6p6vcwRw/profile-displayphoto-shrink_800_800/0/1692323732246?e=1704931200&v=beta&t=FQPqMadrYLvSm-ad8JD_A-4i7QSa7wJijLkSPbaXWLU" style={{ height: '50px', width: '50px', borderRadius:"100%", display:"flex", alignItems:"center" }}/>
//             <Card.Body>
//                 <Card.Title>Aashish panthi</Card.Title>
//                 <Card.Text>You: Can I sche...</Card.Text>
//                 <Button variant="primary" onClick={() => handleUserSelect("Aashish")}>Chat</Button>
//             </Card.Body>
//             </Card>
//           <ul>
//             <li onClick={() => handleUserSelect("Aashish")}>User 1</li>
//             <li onClick={() => handleUserSelect("User2")}>User 2</li>
//             {/* Add more user profiles here */}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chat;

import React, { useState, useRef } from "react";
import "./Chat.css"; // Import your CSS file for styling

const Chat = () => {
  // Sample data for alumni (you can replace this with your data)
  const alumniData = [
    {
      id: 1,
      name: "Netra Nyaupane",
      company: "Microsoft",
      role: "Senior Manager",
      major: "Computer Science",
      classof: "2001",
      image:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/278747523_3863308947228574_4125821487728591631_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=78t9yc4s7rwAX84j7IH&_nc_ht=scontent-atl3-1.xx&oh=00_AfDqNF4BaA2_kzpOzwPI2c9CklKIw2Caa90BK7uA-NC4gA&oe=654CDECF" // Replace with the actual image file name or URL
    },
    // {
    //   id: 2,
    //   name: "Rejin Nepal",
    //   company: "GOOGLE",
    //   role: "SWE",
    //   major: "Computer Science",
    //   classof: "1987",
    //   image:
    //     "https://media.licdn.com/dms/image/D4E03AQFU1Iozi830mw/profile-displayphoto-shrink_200_200/0/1695923063206?e=1704931200&v=beta&t=Zi3-JgbLD5E8AbytDuJtWioHZLGqXxa5faFugXVC-QY" // Replace with the actual image file name or URL
    // },
    {
        id: 3,
        name: "Aashish Panthi",
        company: "Vanderbilt University",
        role: "Associate Professor",
        major: "Psychology",
        classof: "2010",
        image: "https://media.licdn.com/dms/image/D5603AQHo7F6p6vcwRw/profile-displayphoto-shrink_800_800/0/1692323732246?e=1704931200&v=beta&t=FQPqMadrYLvSm-ad8JD_A-4i7QSa7wJijLkSPbaXWLU"
      }
    
  ];

  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const messageInputRef = useRef(null);
  const [newMessage, setNewMessage] = useState("");

  // Use an object to store chat messages for each alumni
  const [alumniChatMessages, setAlumniChatMessages] = useState({});

  const [showDetails, setShowDetails] = useState(true);

  const handleSelectAlumni = (alumni) => {
    setSelectedAlumni(alumni);

    // Initialize chat messages for the selected alumni if not already set
    if (!alumniChatMessages[alumni.id]) {
      alumniChatMessages[alumni.id] = [];
    }

    // Show alumni details initially
    setShowDetails(false);
    handleSendMessage();
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      // Add the message to the chat messages for the selected alumni
      const alumniId = selectedAlumni.id;
      alumniChatMessages[alumniId] = [
        ...alumniChatMessages[alumniId],
        { text: newMessage, sender: "user" }
      ];

      // Update the state with the new chat messages
      setAlumniChatMessages({ ...alumniChatMessages });

      setNewMessage("");
      messageInputRef.current.focus();
    }
  };

  const changeResponse = (alumni) => {
    setSelectedAlumni(alumni); 
    setShowDetails(false);
  }

  return (
    <div>
      <h2 style={{marginLeft:"500px;", marginTop:"30px;"}}>My Chats</h2>
      <div className="alumni-network-container">
      <div className="alumni-list">
        {/* <h2>My Chats</h2> */}
        
        <div className="card-container">
            {alumniData.map((alumni, index) => (
                <Card style={{ width: '25rem' }} key={index}>
                    <Card.Img variant="top" src={alumni.image} />
                    <Card.Body>
                        <Card.Title>{alumni.name}</Card.Title>
                        <Card.Text>Class of {alumni.classof}</Card.Text>
                        <Card.Text> Company: {alumni.company}</Card.Text>
                        <Card.Text>Role: {alumni.role}</Card.Text>
                        <Card.Text>Major: {alumni.major}</Card.Text>
                        <Button variant="primary" onClick={() => handleSelectAlumni(alumni)}>Chat</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
        
      </div>
      <div className="alumni-details">
        {selectedAlumni && showDetails && (
          <div>
            <div className="alumni-info">
              <div className="alumni-image-container">
                {selectedAlumni.image && (
                  <img
                    src={selectedAlumni.image}
                    alt={selectedAlumni.name}
                    className="alumni-image"
                  />
                )}
              </div>
              <div className="alumni-text-info">
                <h2>{selectedAlumni.name}</h2>
                <p>Company: {selectedAlumni.company}</p>
                <p>Role: {selectedAlumni.role}</p>
                <p>Major: {selectedAlumni.major}</p>
              </div>
            </div>
            <button onClick={() => setShowDetails(false)}>Chat</button>
          </div>
        )}

        {selectedAlumni && !showDetails && (
          <div className="chat-section">
            <h2>{selectedAlumni.name}</h2>
            <div className="chat-messages">
              {alumniChatMessages[selectedAlumni.id].map((message, index) => (
                <div key={index} className={`message ${message.sender}`}>
                  {message.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                ref={messageInputRef}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Chat;
