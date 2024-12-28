const HowItWork = (props) => {

    return(
        <div className="display-flex">
            <div className="howitwork-style">
                <div className="main-howitwork ">
                    <div className="icon-style">
                        <img src ={props.info.icon}></img>
                    </div>
                    <div className="fs-24 title-howitwork-style">
                        {props.info.title}
                    </div>
                    <div className="display-flex">
                    <div className="fs-18 text-howitwork-style">
                        {props.info.text}
                    </div>
                </div>
            </div>
            <div className="fs-80 number-howitwork-style">
                    {props.info.number}
                </div>
            </div>
        </div>
    );
};
export default HowItWork;