import { useState, useEffect } from "react";
const TimeTime = (props) => {
    const [hour, setHour] = useState(props.info.hour);
    const [minute, setMinute] = useState(props.info.minute);
    const [second, setSecond] = useState(props.info.second);
    const [hour1, setHour1] = useState();
    const [minute1, setMinute1] = useState();
    const [second1, setSecond1] = useState();
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setSecond((second) => second - 1); 
        }, 1000);
        if (second<10) {
            setSecond1((second1) => "0"+second);
        }
        else setSecond1((second1)=>second);
        if (minute < 10){
            setMinute1((minute1)=>"0"+minute);
        }
        else setMinute1((minute1)=>minute);
        
        if (hour < 10){
            setHour1((hour1)=>"0"+hour);
        }
        else setHour1((hour1)=>hour);
        return ()=>{clearTimeout(timer);}
    });
    
    if (second < 0) {
        setSecond(59);
        if (minute <= 0 && second <=0){
            setMinute(59);
        }
        else setMinute((minute)=>minute-1);
        // if (minute < 10){
        //     setMinute1((minute1)=>"0"+minute);
        // }
        // else setMinute1((minute1)=>minute);
    };
    if (minute < 0){
        setMinute(59);
        if (hour <= 0 && minute <=0){
            setHour(23);
        }
        else setHour((hour)=>hour-1);
        if (hour < 10){
            setHour1((hour1)=>"0"+hour);
        }
        else setHour1((hour1)=>hour);
    };
    return (
        <div className="fs-18 timetime-style" style={{marginTop:props.marginTop}}  >
            <img src = "assets/image/clock.svg"/>
            <p className = "time-timetime-style">
                {hour1} : {minute1} : {second1}
            </p>         
        </div>
    )
}
export default TimeTime;