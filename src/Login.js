import React, { useContext, useState,  } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './App';

    
export default function Login({location}) {
    // Access the setUserAuth function
    const { setUserAuth } = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate()

    const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the login logic here
    if (password && username ) {
        console.log("Login success ")
        const from = location?.state?.from || '/home'
        // login session to authenticate user has logged in
        console.log({from:from})
        setUserAuth("0000");
        navigate(from, { replace: true })
    }else{
        setError("404 - Unauthorised ")
        console.log("error logging in")
    }

    };

    return (
    <form onSubmit={handleSubmit}>
        <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
        <small> {error}</small>
    </form>
    );
}