const CollectionElement = (props) => {
    return (
        <div className="element-collection">
            <div>
                <div class="grid-container-collection">
                    <div class="grid-item-collection" style={{borderRadius: "1.6rem 0 0 0"}}></div>
                    <div class="grid-item-collection" style={{borderRadius: "0 1.6rem 0 0 "}}></div>
                    <div class="grid-item-collection" style={{borderRadius: "0 0 0 1.6rem"}}></div>  
                    <div class="grid-item-collection" style={{borderRadius: "0 0 1.6rem 0"}}></div>
                </div>
            </div>
            <div className="content-element-collection">
                <div className="left-element-collection">
                    <p>{props.name}</p>
                    <p>Created by <span>Sera Cobalt</span></p>
                </div>
                <div className="right-element-collection">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
                        <g id="Like" transform="translate(-1 -2)">
                            <path id="Vector" d="M16.077,0A6.08,6.08,0,0,0,11,3,6.08,6.08,0,0,0,5.923,0,5.878,5.878,0,0,0,0,5.833,5.973,5.973,0,0,0,1.692,10C4.074,12.449,11,20,11,20s6.926-7.551,9.308-10A5.973,5.973,0,0,0,22,5.833,5.878,5.878,0,0,0,16.077,0Z" transform="translate(1 2)" fill="#0b213e"/>
                        </g>
                    </svg>
                    <div className = "number-right-element-collection"style={{height:"6.2rem"}}>
                        150
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CollectionElement;
