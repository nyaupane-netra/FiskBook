import React, { useState } from 'react';
import { unstable_HistoryRouter } from 'react-router-dom';
import FiskBook from '../../Pictures/FiskBookFinal.png';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = '/home';
    };

    return (
        <div>
            <img src={FiskBook} style={{marginTop:"30px", marginLeft:"50px"}}></img>
            <div className="signup-container" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', width: '350px', textAlign: 'center', margin: '10px', transition: 'transform 0.2s', height: '400px' , marginLeft:"600px", marginTop:"60px"}}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Sign In To FiskBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        style={{ width: '92%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        required
                        style={{ width: '92%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px 0' }}
                >
                    Sign In
                </button>
            </form>
        </div>
        </div>
    );
};

export default Signup;