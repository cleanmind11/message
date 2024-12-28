import ArrowButton from "./button";
import { useState } from "react";

const Faq = (props) => {
    const sss1 = {
        display : "block"
    };
    const sss0 = {
        display : "none"
    }
    const www0 = {
        width : "119.2rem"
    }
    const [showstyle, setShowstyle] = useState(sss0);
    const [questionwidth, setQuestionwidth] = useState(www0);
    const [arrow, setArrow] = useState(1);
    const direction = () =>{
        if (showstyle.display === sss1.display) {
            setArrow(1);
            setShowstyle(sss0);
        }
        else {
            setArrow(0)
            setShowstyle(sss1);
        };
    }
    return (
        <>
        <div className="faqs">
            <div className="content-faqs">
                <p className="fs-18 question-faq">
                    {props.info.question}
                </p>
                <p className="fs-18 answer-faq" style={showstyle}>
                    {props.info.answer}
                </p>
            </div>
            <div>
            <button className="ArrowButton" onClick={direction}>
                <ArrowButton  arrowdirection={arrow}/>
            </button>
            </div>
        </div>
        </>
    );
}
export default Faq;
