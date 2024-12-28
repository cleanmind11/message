import Bidhistory from "./bidhistory";
import TimeTime from "./timetime";
import ViewHeart from "./viewheart";

const AbstractNature = (props) => {
    const viewinfo = {
        icon : "assets/image/view.svg",
        number : props.info.viewnumber,
    }
    const heartinfo = {
        icon : "assets/image/heart.svg",
        number : props.info.heartnumber,
    }
    return(
        <div className="abstract-component">
            <div className="photo-abstract-component">
                <img style={{width:"100%",height:"auto"}} src = {props.info.photo}></img>
            </div>
            <div className="content-abstract-component">
                <p className="name-abstract-component">
                    {props.info.name}
                </p>
                <div className="time-view-heart-abstract-component">
                    <TimeTime info={props.info.time}></TimeTime>
                    <ViewHeart info = {viewinfo}></ViewHeart>
                    <ViewHeart info = {heartinfo}></ViewHeart>
                </div>
                <div className="description-abstract-component">
                    <p>Description</p>
                    <p>
                        {props.info.description}
                    </p>
                </div>
                <div className="createdbycollection-abstract-copmponent">
                    <div className="createdby-abstract-component">
                        <div className="avatar-createdby-abstract-component">
                            <img src={props.info.avatar} style={{width:"100%",height:"auto"}}></img>
                        </div>
                        <div className="name-createdby-abstract-component">
                            <p>Created by</p>
                            <p>{props.info.createdby}</p>
                        </div>
                    </div>
                    <div className="collection-abstract-component">
                        <p>Collection</p>
                        <p>{props.info.collection}</p>
                    </div>
                </div>
                <div className="price-abstract-component">
                    <p>Price</p>
                    <p>{props.info.price} ETH</p>
                </div>
                <div className="button-abstract-component">
                    <button>Place a Bid</button>
                    <button>Buy Now</button>
                </div>
                <div className="bidhistory-abstract-component">
                    <Bidhistory bid={props.info.bidhistory} comments={props.info.comment}></Bidhistory>
                </div>
            </div>
        </div>
    );
}

export default AbstractNature;