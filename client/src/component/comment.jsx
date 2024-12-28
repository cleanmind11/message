import { useEffect, useState } from "react";
const Comment = (props) => {

    return(
        <div className="comment-component"> 
            <p>{props.info.by}</p>
            <p>{props.info.commenttext}</p>
        </div>
    );
}
export default Comment;