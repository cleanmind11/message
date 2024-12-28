import { useContext } from "react";
const MessageTo = (props) => {
    // const user = useContext(UserInfo);
    return(
        
        <div className="messageto">
            <div className="avatar-messageto">
                <img src={props.nowpartner.avatar}></img>
            </div>
            <p>{props.nowpartner.name}</p>
        </div>
    );
}
export default MessageTo;