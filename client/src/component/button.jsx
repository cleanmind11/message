const ArrowButton = (props) => {
    const upArrow = ["matrix(-1, 0, 0, -1, 16.94, 15)","matrix(1, 0, 0, 1, -6.996, -8.996)"];
    let arroww = upArrow[props.arrowdirection];
    return (
        
            <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                <g id="chevron-down" transform={arroww}>
                    <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#838383"/>
                </g>
            </svg>
        
    );
}

export default ArrowButton;