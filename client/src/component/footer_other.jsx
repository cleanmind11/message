import SocialMedia from "./socialmedia";
const Footer_other = () => {
    const icon = ["instagram","twitter","facebook","telegram"];
    const socialmediaList = icon.map((item, index) => <SocialMedia info={item} key={index} opacity = {"50%"}/>);
    return(
        
        <div className="footer-main">
            <div className="down-footer-main">
                <div className="main-down-footer-main">
                    <div className="left-main-down-footer-main">
                        <div className="logo-footer">
                            <div className="icon-logo-footer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" viewBox="0 0 48 30">
                                    <g id="planet_" data-name="planet " transform="translate(0 -9)">
                                        <path id="Vector" d="M0,15.91A15,15,0,0,0,24.369,26.69,97.44,97.44,0,0,1,12.493,22.37,98.724,98.724,0,0,1,0,15.91ZM1.039,9.434a87.466,87.466,0,0,0,13.845,7.433,90.033,90.033,0,0,0,11.8,4.234q.886.243,1.78.458.238-.488.439-.993A14.958,14.958,0,0,0,29.97,15c0-.306-.01-.609-.028-.91A15,15,0,0,0,1.479,8.441q-.238.488-.44.993Z" transform="translate(9.028 9)" fill="#0b213e"/>
                                        <path id="Vector-2" data-name="Vector" d="M40.281,14.726a8.756,8.756,0,0,1-.552,2.315,30.282,30.282,0,0,1,3.857,3.182c.308.312.551.584.742.816-.158.008-.333.012-.528.012A35.2,35.2,0,0,1,35.315,19.6a91.562,91.562,0,0,1-12-4.3,87.5,87.5,0,0,1-14.579-7.9A31.757,31.757,0,0,1,4.412,3.88C4.1,3.568,3.861,3.3,3.67,3.064c.158-.008.333-.012.528-.012a27.7,27.7,0,0,1,5.527.725A9.325,9.325,0,0,1,11.1,1.769,31.8,31.8,0,0,0,4.2.052C1.911-.213.417.569.075,1.659-.963,4.969,8.906,12.306,22.119,18.046,30.984,21.9,39.1,24.052,43.8,24.052c2.3,0,3.782-.518,4.123-1.607.594-1.9-2.27-4.393-7.641-7.718Z" transform="translate(0 11.948)" fill="#1c83e5"/>
                                    </g>
                                </svg>
                            </div>
                            <p className="fs-32">OuterSpaces</p>
                        </div>
                        <div className="fs-18 text-left-main-down-footer-main">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. 
                        </div>
                    </div>
                    <div className="right-main-down-footerother">
                        <div className="element-right-main-down-footer-main">
                            <p className="fs-24 title-element-right-main-down-footer-main">
                                About Us
                            </p>
                            <p className="fs-16 text-element-right-main-down-footer-main">
                                About
                            </p>
                            <p className="fs-16 text1-element-right-main-down-footer-main">
                                Contact 
                            </p>
                        </div>
                        <div className="element-right-main-down-footer-main">
                            <p className="fs-24 title-element-right-main-down-footer-main">
                                Links       
                            </p>
                            <p className="fs-16 text-element-right-main-down-footer-main">
                                Blog
                            </p>
                            <p className="fs-16 text1-element-right-main-down-footer-main">
                                Help Center 
                            </p>
                        </div>
                        <div className="element-right-main-down-footer-main">
                            <p className="fs-24 title-element-right-main-down-footer-main">
                                Community Links
                            </p>
                            <p className="fs-16 text-element-right-main-down-footer-main">
                                Discord
                            </p>
                            <p className="fs-16 text1-element-right-main-down-footer-main">
                                Community
                            </p>
                        </div>
                    <div>
                    <div className="content-up-footerother">
                            <div className="fs-24 title-content-up-footer-main">
                                Signup for our newsletter to get the latest information in your inbox
                            </div>
                            <div className="fs-18 text-content-up-footer-main">
                                No spam message, your email is safe with us
                            </div>
                            <div className="email-content-up-footer-main">
                                <input type="text" className="fs-18 email-footerother" placeholder="Type your email here"></input>
                                <button className="blueButton email-button">Subscribe</button>
                            </div>
                    </div>    
                </div>
                    
                        
                </div>
                
            </div>
            <div id = "copyright-footerother">
                    <p className="display-flex">Copyright © 2021 Tronix. All Right Reseved</p>
                    <div className="socialmediaList">
                                {socialmediaList}
                    </div>
            </div>
        </div>
        </div>
    );
}
export default Footer_other;