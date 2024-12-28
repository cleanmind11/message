import SocialMedia from "./socialmedia";

const JimXVic = () => {
    const icon = ["instagram","twitter","facebook","telegram"];
    const socialmediaList = icon.map((item, index) => <SocialMedia info={item} key={index} opacity = {"100%"} size={"5rem"}/>);
    return (
        <>
        <div className = "jimxvic">
            <div className = "header-jimxvic"></div>
            <div className = "main-jimxvic">
                <div className="rect-jimxvic">
                    
                </div>
                <div className="text-jimxvic">
                    <div className="text-text-jimxvic">
                        
                        <p><span style={{paddingRight:"3.2rem"}}>JimXVic</span>(@jimxvic)</p>
                        <p3 style = {{paddingTop:"0.8rem"}}>www.jincreate.com</p3>
                        <div style={{paddingTop:"1.6rem"}}>
                        <button className="button-jimxvic">
                            WbgahGHhab77
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21">
                                <g id="copy" transform="translate(-3 -1.5)">
                                    <g id="Layer_2" data-name="Layer 2">
                                    <path id="Vector" d="M1.5,0H12a1.5,1.5,0,0,1,1.5,1.5V15A1.5,1.5,0,0,1,12,16.5H1.5A1.5,1.5,0,0,1,0,15V1.5A1.5,1.5,0,0,1,1.5,0Z" transform="translate(3 1.5)" fill="#838383"/>
                                    <path id="Vector-2" data-name="Vector" d="M13.5,1.5V14.25a1.5,1.5,0,0,1-1.5,1.5H1.5A1.5,1.5,0,0,1,0,14.25v-1.5H7.5a3,3,0,0,0,3-3V0H12a1.5,1.5,0,0,1,1.5,1.5Z" transform="translate(7.5 6.75)" fill="#838383"/>
                                    </g>
                                </g>
                            </svg>
                        </button>
                        </div>
                        
                    </div>
                    <div className="socialmediaList">
                        {socialmediaList}
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
}
export default JimXVic;
