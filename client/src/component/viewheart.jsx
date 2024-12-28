const ViewHeart = (props) => {
    return(
        <div className="viewheart">
            <div className="viewheart1">
                <img className="icon-viewheart" src = {props.info.icon}></img>
                <p className="fs-16 number-viewheart">{props.info.number}</p>
            </div>
        </div>
    );
}
export default ViewHeart;