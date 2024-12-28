import { useEffect, useState } from "react";

const Message = (props) => {
    const [style, setStyle] = useState();
    const [pstyle, setPstyle] = useState();
    const style1 = {
        justifyContent : "flex-end",
    }
    const pstyle1 = {
        backgroundColor : "green",
    }
    const pstyle2 = {
        backgroundColor: "deepskyblue",
    }
    const style2 = {
        justifyContent : "flex-start",
    }
    useEffect(()=>{
        if (props.myinfo.username == props.message.from){
            setStyle(style1);
            setPstyle(pstyle1)
        }
        else {setStyle(style2);setPstyle(pstyle2);}
    },[props])
    return (
        <div className="message" style={style}>
            <p style={pstyle}>
                {props.text}
                <span>&nbsp;&nbsp;{props.time}</span>        
            </p>
        </div>
    );
}
export default Message;