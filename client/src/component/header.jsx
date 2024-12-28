const Header = (props) => {
    return (
        <>
            <div className="header-style">
                <div>
                    <div className="fs-48">
                        {props.info.title}
                    </div>
                    <div className="fs-18">
                        {props.info.text}
                    </div>
                </div>
                <div>
                    <div className="fs-24 explore-header-style">
                        Explore
                    </div>
                    <hr className="under-header-style"></hr>
                </div>
            </div>
        </>
    )
}

export default Header;