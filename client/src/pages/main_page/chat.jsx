import "../../assets/css/all_page.css"
import "../../assets/css/chat_page.css"
import  NavBar from "../../component/navBar"
import ChatLeftBar from "../../component/chatleftbar";
import Chatting from "../../component/chatting";
import { createContext, useEffect, useState, useRef } from "react";
import { sendMessageRoute, getMessageRoute } from "../../utils/APIroute"
import axios from "axios";
import Loginout from "../../component/loginout";
import APP_HOST from "../../config/envVariables";
import { ToastContainer } from 'react-toastify';
import {io} from "socket.io-client";
let resuserlist;

const allprops = {
    // userlistinfo : [
    //     {
    //         avatar : "assets/image/bird.jpg",
    //         name : "Linkon",
    //     },
    //     {
    //         avatar : "assets/image/bird.jpg",
    //         name : "Linkon",
    //     },
    //     {
    //         avatar : "assets/image/bird.jpg",
    //         name : "Linkon",
    //     },
    // ],
    noreadmessagenumber : 10,
    myinfo : {
        avatar : "assets/image/avatar1.jpg",
        username : "Hamiltone",
    },
    nowuser : {
        avatar :  "assets/image/bird.jpg",
        name : "William",
    },
    messagehistory : [
        {
            direction : 1,
            msg : "Hello Hello",
            timestamp : "sdsdsd"
        },
        {
            direction : 0,
            msg : "Hello Hello",
            timestamp : "10:10"
        },
    ]
    

}
// const usernow = {
//     avatar : "",
//     name : "Hamiltone Aibrahame",
// }

const noreadmessage = {

}
const Chatpage = () => {
    console.log(APP_HOST);
    const socket = useRef();
    const [userlistinfo, setUserlistinfo] = useState("")
    const [myinfo, setMyinfo] = useState(allprops.myinfo);
    const [msgHistory,setMsgHistory] = useState(allprops.messagehistory);
    const [nowpartner, setNowpartner] = useState(allprops.nowuser);
    const getUserlistinfo = async () => {
        resuserlist = await axios.get('http://localhost:5000/api/auth/getAll')
        console.log("userlist", resuserlist.data)
        setUserlistinfo(resuserlist.data)
    }
    const getMessagehistory = async () => {
        // console.log(myname, typeof myname);
        const address = getMessageRoute+'/:'+nowpartner.name+'/:'+myinfo.username;
        // console.log(address, typeof address);
        const resMessagehistory = await axios.get(address);
        // console.log("RESMessageHistory", resMessagehistory);
        setMsgHistory(resMessagehistory.data.data);
    }
    useEffect(() => {
        // getMessageHistory()
        getUserlistinfo()
        
    },[nowpartner])

    useEffect(()=>{
        socket.current = io(APP_HOST);
        
        socket.current.on("msg-recieve", (msg)=>{
            
        });
    
        return () => {
            socket.current.off('msg-receive');
        }
        // }
    }, []);
    // useEffect(()=>{
    //     if(socket.current){
    //         // props.socket.current.on("msg-recieve", (data)=>{
    //             getMessagehistory();
    //         // });
    //     }
    // },)
    // useEffect(()=>{
    //     socket.current = io(APP_HOST);
        
    //     if(socket.current){
    //         socket.current.on("msg-recieve", (data)=>{
    //             getMessagehistory();
    //         });
    //     }
    //     // console.log("props.socket.current:",socket.current)
        
    //     // }
    // }, []);

    const UserInfo = createContext();
    // const noreadmessage = createContext();

    return (
        <>
        <NavBar></NavBar>
        <Loginout setMyinfo={setMyinfo} socket = {socket}></Loginout>
        <div className="chat">

                <div className="chatpage">
                    <div className="chat">
                        <ChatLeftBar userlist={userlistinfo} noreadmessagenumber={allprops.noreadmessagenumber} myinfo={myinfo}  setMsgHistory = {setMsgHistory} setNowpartner = {setNowpartner}></ChatLeftBar>
                    </div>
                    <Chatting socket={socket} messagehistory = {allprops.messagehistory} msgHistory = {msgHistory} setMsgHistory = {setMsgHistory} nowpartner={nowpartner} myinfo = {myinfo}></Chatting>
                </div>
        </div>
        </>
    );
}

export default Chatpage;