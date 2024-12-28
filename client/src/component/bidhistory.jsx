import { useState } from "react";
import Bid from "./bid";
import Comment from "./comment";
const Bidhistory = (props) =>{
    
    const style1 = {
        color : "#1C83E5",
        borderStyle : "none none solid none",
        borderColor : "#1C83E5",
    }
    const style2 = {
        border : "none",
        color : "#838383",
    }
    const [bidbutton, setBidbutton] = useState(style1);
    const [commentbutton, setCommentbutton] = useState(style2);
    const [bidstyle, setBidstyle] = useState("flex");
    const [commentstyle, setCommentstyle] = useState("none");
    const bidlist = props.bid.map((item, key) => 
        <Bid info = {item} index = {key}></Bid>
    )
    const commentlist = props.comments.map((item, key) => 
        <Comment info = {item} index = {key}></Comment>
    )
    const change1 = () =>{
        setBidbutton(style1);
        setCommentbutton(style2);
        setBidstyle("flex");
        setCommentstyle("none");
        console.log(1);
    }
    const change2 = () => {
        setBidbutton(style2);
        setCommentbutton(style1);
        setBidstyle("none");
        setCommentstyle("flex");
        console.log(2);
    }
    return(
        <div>
            <div className="button-bidhistory-component">
                <button  className="element-button-bidhistory-component" onClick = {change1} style={bidbutton}>
                    Bid History
                </button>
                <button  className="element-button-bidhistory-component" onClick = {change2} style={commentbutton}>
                    Comments({props.comments.length})
                </button>
            </div>
            <div className="bidhistory-bidhistory-component" style={{display:bidstyle}}>
                {bidlist}
            </div>
            <div className="commet-bidhistory-component" style={{display:commentstyle}}>
                {commentlist}
            </div>
        </div>
    );
}

export default Bidhistory;