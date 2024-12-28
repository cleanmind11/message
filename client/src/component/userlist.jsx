import axios from "axios";
import {useState, useContext } from "react";
import { getMessageRoute } from "../utils/APIroute";
const UserList = (props) => {
    const name = props.name;
    const myname = props.myinfo.username;
    // const username = useContext(UserInfo);
    const getMessagehistory = async () => {
        // console.log(myname, typeof myname);
        const address = getMessageRoute+'/:'+name+'/:'+myname;
        console.log(address, typeof address);
        const resMessagehistory = await axios.get(address);
        console.log("RESMessageHistory", resMessagehistory);
        props.setMsgHistory(resMessagehistory.data.data);
        const nowpartner = {
            name : props.name,
            avatar : props.avatar
        }
        props.setNowpartner(nowpartner);
    }
    // console.log("hhhhhh", myname);
    return (
        <>
        <div onClick={getMessagehistory} className="userlist-component">
            <div className="avatar-userlist-component">
                <img src={props.avatar}></img>
            </div>
            <div>
                {name}
            </div>
        </div>
        </>
    );
}
export default UserList;