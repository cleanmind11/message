import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const login = async () => {
        const res = await axios.post('http://localhost:5000/api/auth/login', {username, password})
        console.log(res)
        if (res.data.status) {
            navigate('/chat');
        }
    } 

    return (
        <>
            <div>
                
                    <label for="username">User name:</label><br/>
                    <input type="text" value={username} id="username" name="username" placeholder="John" onChange={(e) => setUsername(e.target.value)}/><br/>
                    <label for="password">Password:</label><br/>
                    <input type="password" value={password} id="password" name="password" placeholder="123456" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
                    <button onClick={login}>Login</button>
                
            </div>
        </>
    );
}
export default Login;