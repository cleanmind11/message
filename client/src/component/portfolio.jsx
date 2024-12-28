import PortfolioProduct from "./portfolioproduct";

const Portfolio = () => {
    return (
        <div className = "portfolio">
            <div className = "header-portfolio">
                <div>Portfolio Product</div>
                <div className = "right-header-portfolio">
                    <div className = "blue-element-header-portfolio">
                        All
                    </div>
                    <div className = "element-header-portfolio">
                        Art
                    </div>
                    <div className = "element-header-portfolio">
                        Music
                    </div>
                    <div className = "element-header-portfolio">
                        Collectibles
                    </div>
                </div>
            </div>
            <div className = "main-portfolio">
                <PortfolioProduct name = {"About You"}></PortfolioProduct>
                <PortfolioProduct name = {"Dig Deep"}></PortfolioProduct>
                <PortfolioProduct name = {"Growling Pan"}></PortfolioProduct>
                <PortfolioProduct name = {"Timber Link"}></PortfolioProduct>
            </div>
            <div className="learnmore" style={{marginTop:"7.2rem"}}>
                Learn More
            </div>
        </div>
    );
}
export default Portfolio