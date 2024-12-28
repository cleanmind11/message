import CollectionElement from "./collectionelement";
const Collection = () => {
    return(
        <>
        <div className="collection">
            <div className="header-collection">
                Collecitons
            </div>
            <div className="content-collection">
                <CollectionElement name = {"Abstract Attractive"}></CollectionElement>
                <CollectionElement name = {"Jump Jump"}></CollectionElement>
                <CollectionElement name = {"Hello, morning"}></CollectionElement>
            </div>
            <div className="learnmore" style={{marginTop:"7.2rem"}}>
                Learn More
            </div>
        </div>
        </>
    );
}
export default Collection;