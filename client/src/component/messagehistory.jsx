import Message from "./message";

const MessageHistory = (props) => {
    console.log("MSG",props.messagehistory)
    return(
        <div className="messagehistory">
            {props.messagehistory.length >0 && props.messagehistory.map((item) => <Message text = {item.msg} direction = {1} time = {item.timestamp} message = {item} myinfo = {props.myinfo}></Message>)}
        </div>
    );
}
export default MessageHistory;