import { useEffect, useState } from "react";
const Bid = (props) => {
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    useEffect(()=>{
        if (props.info.time.hour < 10) {
            setHour("0"+props.info.time.hour);
        }
        else setHour(props.info.time.hour);
        if (props.info.time.minute < 10) {
            setMinute("0"+props.info.time.minute);
        }
        else setMinute(props.info.time.minute);
    });
    return(
        <div className="bid-component">
            <div className="avatar-bid-component"> 
                <img src = {props.info.avatar} style={{width:"100%",height:"auto"}}></img>
            </div>
            <div className="info-bid-component">
                <p>Bid {props.info.price} ETH</p>
                <p>by <span>{props.info.by}</span> at {props.info.date.month}/{props.info.date.day}/{props.info.date.year}, {hour}:{minute} {props.info.time.apm}</p>
            </div>
        </div>
        
    );
}
export default Bid;