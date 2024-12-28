import Rect from "./rect";
import User from "./user";
import TimeTime from "./timetime";
const LiveAuctionOther = (props) => {
    const userInfo = {
        avatar : props.info.avatar,
        name : props.info.username,
    }
    
    return (
        <div className="bigrect-liveauction">
            <User info = {userInfo}/>
            <div className="photo-liveauction-style">
                <img style={{width:"100%"}} src = {props.info.photoOfGood}/>
            </div>
            <div style={{marginLeft:"7.2rem",marginTop:props.margintop}}>
                <TimeTime info = {props.info.time} margintop = {props.info.margintop}/>
            </div>
            <p className="fs-24 name-liveauction-style">
                {props.info.nameOfGood}
            </p>
            <p className="fs-24 price-liveauction-style">
                {props.info.price}
            </p>
            <button className="fs-18 blueButton bidbutton-liveauction-style">
                Place Bid
            </button>
        </div>
    );
}
export default LiveAuctionOther;