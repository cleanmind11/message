import { Link, useNavigate, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "./search";

const NavBar = () => {
    const navigate = useNavigate(); 
    const [searchbarshow, setSearchbarshow] = useState("none");
    const path = useResolvedPath();
    useEffect(()=>{
        if (path.pathname !== "/") {
            setSearchbarshow("block");
        }
        else setSearchbarshow("none");
    });
    console.log(path);
    return(
        <div className="navBar">
            <div className="logo">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" viewBox="0 0 48 30">
                        <g id="planet_" data-name="planet " transform="translate(0 -9)">
                            <path id="Vector" d="M0,15.91A15,15,0,0,0,24.369,26.69,97.44,97.44,0,0,1,12.493,22.37,98.724,98.724,0,0,1,0,15.91ZM1.039,9.434a87.466,87.466,0,0,0,13.845,7.433,90.033,90.033,0,0,0,11.8,4.234q.886.243,1.78.458.238-.488.439-.993A14.958,14.958,0,0,0,29.97,15c0-.306-.01-.609-.028-.91A15,15,0,0,0,1.479,8.441q-.238.488-.44.993Z" transform="translate(9.028 9)" fill="#0b213e"/>
                            <path id="Vector-2" data-name="Vector" d="M40.281,14.726a8.756,8.756,0,0,1-.552,2.315,30.282,30.282,0,0,1,3.857,3.182c.308.312.551.584.742.816-.158.008-.333.012-.528.012A35.2,35.2,0,0,1,35.315,19.6a91.562,91.562,0,0,1-12-4.3,87.5,87.5,0,0,1-14.579-7.9A31.757,31.757,0,0,1,4.412,3.88C4.1,3.568,3.861,3.3,3.67,3.064c.158-.008.333-.012.528-.012a27.7,27.7,0,0,1,5.527.725A9.325,9.325,0,0,1,11.1,1.769,31.8,31.8,0,0,0,4.2.052C1.911-.213.417.569.075,1.659-.963,4.969,8.906,12.306,22.119,18.046,30.984,21.9,39.1,24.052,43.8,24.052c2.3,0,3.782-.518,4.123-1.607.594-1.9-2.27-4.393-7.641-7.718Z" transform="translate(0 11.948)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </div>
                <p className="fs-32">OuterSpaces</p>
            </div>
            <div className="searchbar" style = {{display:searchbarshow}}>
                <Search></Search>
            </div>
            <div className="menu">
                <Link to="/home" className="navbar-home">
                    Home
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                        <g id="chevron-down" transform="translate(-6.996 -8.996)">
                            <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </Link>
                <Link to="/Abstract"className="navbar-abstractnature" >
                    Abstract Nature
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                        <g id="chevron-down" transform="translate(-6.996 -8.996)">
                            <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </Link>
                <Link to="/chat" className="navbar-profile">
                    Chatting
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                        <g id="chevron-down" transform="translate(-6.996 -8.996)">
                            <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </Link>
                <Link to="/Profile" className="navbar-profile">
                    Profile
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                        <g id="chevron-down" transform="translate(-6.996 -8.996)">
                            <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </Link>
                <Link to="/LiveAuction" className="navbar-profile">
                    Live Auction
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.945" height="6.004" viewBox="0 0 9.945 6.004">
                        <g id="chevron-down" transform="translate(-6.996 -8.996)">
                            <path id="Vector" d="M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.714.294L5,3.594,8.294.3A1,1,0,0,1,9.7,1.714l-4,4A1,1,0,0,1,5,6Z" transform="translate(6.996 8.996)" fill="#1c83e5"/>
                        </g>
                    </svg>
                </Link>
            </div>
            <div className="create">
                <svg id="Search" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="search-2" data-name="search">
                            <path id="Vector" d="M0,0H32V32H0Z" fill="#0b213e" opacity="0"/>
                            <path id="Vector-2" data-name="Vector" d="M23.613,21.72,19.08,17.2a10.56,10.56,0,0,0,2.253-6.533A10.667,10.667,0,1,0,10.667,21.333,10.56,10.56,0,0,0,17.2,19.08l4.52,4.533a1.339,1.339,0,1,0,1.893-1.893ZM2.667,10.667A8,8,0,1,1,5.01,16.324,8,8,0,0,1,2.667,10.667Z" transform="translate(4 4)" fill="#0b213e"/>
                        </g>
                    </g>
                </svg>
                <button id = "createNft" className = "blueButton" onClick={() => navigate("/create")}>
                    Create NFT
                </button>
            </div>
        </div>
    )
}
export default NavBar;