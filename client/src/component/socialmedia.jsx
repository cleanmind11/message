const SocialMedia = (props) => {
    const x = "assets/image/"+props.info+".svg";
    return (

        <div className="bigrect-socialmedia" style ={{opacity:props.opacity,width:props.size,height:props.size}}>
            <img src = {x}></img>
        </div>
    );
}

export default SocialMedia;