const PopularCollection = (props) => {
    return(
        <div className="mainstyle-popularcollection">
            <div className="bigrect-popularcollection">
            </div>
            <div className="blueButton fs-16 heartstyle-popularcollection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14.667" height="13.333" viewBox="0 0 14.667 13.333">
                        <g id="Like" transform="translate(-0.667 -1.333)">
                            <path id="Vector" d="M10.718,0A4.053,4.053,0,0,0,7.333,2,4.053,4.053,0,0,0,3.949,0,3.918,3.918,0,0,0,0,3.889,3.982,3.982,0,0,0,1.128,6.667C2.716,8.3,7.333,13.333,7.333,13.333S11.951,8.3,13.539,6.667a3.982,3.982,0,0,0,1.128-2.778A3.918,3.918,0,0,0,10.718,0Z" transform="translate(0.667 1.333)" fill="#fcfcfc"/>
                        </g>
                    </svg>
                    <p>
                        {props.info.heart}
                    </p>
            </div>
            <div className="content-popularcollection">
                <div className = "smallrect-popularcollection">
                
                </div>
                <p className="fs-24 title-popularcollection">Cute Things</p>
                <p className="fs-16">Created by Sera Cobalt</p>
            </div>

        </div>
    );
}
export default PopularCollection;