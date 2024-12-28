const Circle = (props) => {
    const circleStyle = {
        borderRadius : "50%",
        width : props.info.radius,
        height : props.info.radius,
        backgroundColor : props.info.backgroundColor,
        border : "none"
    }
    return(
        <div style={circleStyle}>

        </div>
    );
}
export default Circle;