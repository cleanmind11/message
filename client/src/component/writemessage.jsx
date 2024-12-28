import { useState, useEffect } from "react";
import { sendMessageRoute, getMessageRoute } from "../utils/APIroute";
import {io} from "socket.io-client";
import APP_HOST from "../config/envVariables";
import axios from "axios";
const WriteMessage = (props) => {

    const [msg, setMsg] = useState("")
    const to = props.nowpartner.name;
    const from = props.myinfo.username;
    const time = new Date();
    const timestamp = "" + time.getFullYear()+"-"+time.getMonth()+"-"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
    const getMessagehistory = async () => {
        // console.log(myname, typeof myname);
        const address = getMessageRoute+'/:'+props.nowpartner.name+'/:'+props.myinfo.username;
        // console.log(address, typeof address);
        const resMessagehistory = await axios.get(address);
        // console.log("RESMessageHistory", resMessagehistory);
        props.setMsgHistory(resMessagehistory.data.data);
    }
    const sendmessage = async  () => {
        console.log("MSG",msg);
        console.log("From", from);
        console.log("To",to);
        console.log("timestamp",timestamp);
        const res = await axios.post(sendMessageRoute, {msg, from, to, timestamp})
        
        props.socket.current.emit("send-msg",{
            to : to,
            from : from,
            message : msg,
            timestamp : timestamp,
        });
        setMsg("");
        getMessagehistory();
    }
    // useEffect(()=>{
    // //    props.socket.current = io(APP_HOST);
    //     console.log("props.socket.current:",props.socket.current)
    //     if(props.socket.current){
    //         props.socket.current.on("msg-recieve", (data)=>{
    //             getMessagehistory();
    //         });
    //     }
    // },);
    useEffect(()=>{
        // props.socket.current = io(APP_HOST);
            console.log("props.socket.current:",props.socket.current)
            if(props.socket.current){
                // props.socket.current.on("msg-recieve", (data)=>{
                    getMessagehistory();
                // });
            }
        });
    // useEffect(()=>{
    //     props.socket.current.on("msg-recieve", (data)=>{
    //         getMessagehistory();
    //     });
    // },[]);

    
    return(
        <div className="writemessage">
            <textarea id = "textarea" className="main-writemessage" placeholder="Your Message" value={msg} onChange={(e) => setMsg(e.target.value)}>

            </textarea>
            <div className="down-writemessage">
                <button onClick={sendmessage}>Send</button>
            </div>
        </div>
        
    );
}
export default WriteMessage;