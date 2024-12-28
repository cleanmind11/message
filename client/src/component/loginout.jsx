import { useState } from "react"
import axios from "axios"
import { loginRoute, registerRoute } from "../utils/APIroute"
import {io} from "socket.io-client";
import APP_HOST from "../config/envVariables";
const Loginout = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [currentUser, setCurrentUser] = useState("")

    const [avatar, setAvatar] = useState("")
    const loginshowstyle1 = {
        display : "block"
    };
    const loginshowstyle2 = {
        display : "none"
    }
    const registershowstyle1 = {
        display : "block"
    };
    const registershowstyle2 = {
        display : "none"
    }
    const [loginshowstyle, setLoginshowstyle] = useState(loginshowstyle2);
    const [registershowstyle, setRegistershowstyle] = useState(registershowstyle2)
    const loginshowhidden = () => {
        if (loginshowstyle.display == "block") {
            setLoginshowstyle(loginshowstyle2);
        }
        else {
            setLoginshowstyle(loginshowstyle1);
        }
    }
    const registershowhidden = () => {
        if (registershowstyle.display == "block") {
            setRegistershowstyle(registershowstyle2);
        }
        else {
            setRegistershowstyle(registershowstyle1);
        }
    }
    const login = async () => {
        const res = await axios.post(loginRoute, {username, password})
        // console.log(res)
        props.setMyinfo(res.data.user);
        setCurrentUser(username);
        props.socket.current = io(APP_HOST);
        props.socket.current.emit("add-user", username);
    }

    const register = async () => {
        const res = await axios.post(registerRoute, {username, password, avatar})
        // console.log(res)
        registershowhidden();
    }
 
    return (
        <>
        <div className="button-login-component">
            <button onClick={loginshowhidden}>LogIn</button>
            <button>LogOut</button>
            <button onClick={registershowhidden}>Register</button>
        </div>
        <div id ="loginout" style={loginshowstyle}>
            <label for="username">User name:</label><br/>
            <input type="text" value={username} id="username" name="username" placeholder="John" onChange={(e) => setUsername(e.target.value)}/><br/>
            <label for="password">Password:</label><br/>
            <input type="password" value={password} id="password" name="password" placeholder="123456" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <button onClick={login}>Login</button>   
        </div>
        <div id="register" style={registershowstyle}>
            <label for="registerusername">User name:</label><br/>
            <input type="text" value={username} id="registerusername" name="registerusername" placeholder="John" onChange={(e) => setUsername(e.target.value)}/><br/>
            <label for="password">Password:</label><br/>
            
            <input type="password" value={password} id="registerpassword" name="registerpassword" onChange={(e) => setPassword(e.target.value)} /><br/><br/>
            <label for="avatar">Avatar</label><br/>
            <input type="text" value={avatar} id="avatar" name="avatar" placeholder="John" onChange={(e) => setAvatar(e.target.value)}/><br/>
            <button onClick={register}>Register</button>
            
        </div>
        </>
    );
}
export default Loginout;