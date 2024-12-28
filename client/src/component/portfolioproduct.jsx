const PortfolioProduct = (props) => {
    return(
        <div className="portfolioproduct">
            <div className="rect-portfolioproduct">
                
            </div>
            <div className = "title-portfolioproduct">
                <p className="text-title-portfolioproduct">
                    {props.name}
                </p>
                <div className = "symbol-title-portfolioproduct">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21.919" height="5.984" viewBox="0 0 21.919 5.984">
                        <g id="Dot" transform="translate(-1.04 -9.008)">
                            <path id="Layer_41" data-name="Layer 41" d="M2.96,5.984A2.992,2.992,0,0,1,2.959,0a2.992,2.992,0,0,1,0,5.984Zm8-5.984a2.992,2.992,0,1,0,2.095.888A2.992,2.992,0,0,0,10.959,0Zm8,0a2.992,2.992,0,1,0,2.095.888A2.992,2.992,0,0,0,18.959,0Z" transform="translate(1.041 9.008)" fill="#0b213e"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className="price-portfolio">
                <div>5.1ETH</div>
                <div>23 of 100</div>
            </div>
            <div className="button-portfolio">
                <div className="time-button-portfolio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.01" height="18.985" viewBox="0 0 16.01 18.985">
                        <g id="timer" transform="translate(-4.015 -2.5)">
                            <path id="Vector" d="M5.985,2h4a.945.945,0,0,0,1-1,.945.945,0,0,0-1-1h-4a.945.945,0,0,0-1,1A.945.945,0,0,0,5.985,2Zm8.3,4.1.9-.9a.99.99,0,0,0-1.4-1.4l-.9.9a7.822,7.822,0,0,0-9.8,0l-.9-.9a.967.967,0,0,0-1.4,0,.967.967,0,0,0,0,1.4l.9.9a7.981,7.981,0,0,0,12.6,9.8A7.822,7.822,0,0,0,14.285,6.1ZM9.685,12a2.062,2.062,0,0,1-1.7,1,2.006,2.006,0,0,1-2-2,1.936,1.936,0,0,1,1-1.7V7a.945.945,0,0,1,1-1,.945.945,0,0,1,1,1V9.3A1.862,1.862,0,0,1,9.685,12Z" transform="translate(4.015 2.5)" fill="#0b213e"/>
                        </g>
                    </svg>
                    <p>02 : 15 10</p>
                </div>
                <div className="bid-button-portfolio">
                    Place Bid
                </div>
            </div>
        </div>
    );
}
export default PortfolioProduct;