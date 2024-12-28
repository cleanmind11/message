import MessageHistory from "./messagehistory";
import MessageTo from "./messageto";
import WriteMessage from "./writemessage";

const Chatting = (props) => {
    
    return(
        <div className="motherchatting">
            <div className="chatting">
                <div>
                    <MessageTo nowpartner={props.nowpartner}></MessageTo>
                    <MessageHistory messagehistory = {props.msgHistory} myinfo = {props.myinfo} ></MessageHistory>
                </div>
                <div>
                    <WriteMessage socket ={props.socket} setMsgHistory = {props.setMsgHistory} nowpartner={props.nowpartner} myinfo = {props.myinfo}></WriteMessage>
                </div>
        </div>
        </div>
    );
}
export default Chatting;