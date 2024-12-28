const Rect = (props) => {
    const rectStyle = {
        width : props.info.width,
        height : props.info.height,
        borderRadius : props.info.radius,
        backgroundColor : props.info.backgroundColor,
        borderWidth : props.info.borderWidth,
        borderColor : props.info.borderColor,
        borderStyle : "solid",
        paddingLeft : props.info.paddingLeft,
        paddingRight : props.info.paddingRight,
        paddingTop : props.info.paddingTop,
        paddingBottom : props.info.paddingBottom
    }

    return (
        <>
            <div style={rectStyle}>
                {props.info.content}
            </div>
        </>
    )
}
export default Rect;