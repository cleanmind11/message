const User = (props) => {
    return (
        <div className="display-flex spacebetween width-auto">
            <div className="display-flex">
                <img src = {props.info.avatar}/>
                <div className="fs-16 name-user-style">
                    {props.info.name}
                </div>
            </div>
            <div>
                <img src = "assets/image/dot3.svg"></img>
            </div>
        </div>
    )
}

export default User;