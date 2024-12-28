const TopArtist = (props) => {
    return (
        <>
            <div>
            <div>
                <img src={props.info.photoOfGood}></img>
            </div>
            <p className="fs-24" style={{fontWeight:"bold",marginTop:"2.4rem"}}>
                {props.info.name}
            </p>
            <p className="fs-24" style={{marginTop:"0.8rem",color:"#838383"}}>
                {props.info.price}
            </p>
            </div>
        </>
    );
}
export default TopArtist;