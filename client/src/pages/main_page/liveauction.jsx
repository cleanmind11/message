import "../../assets/css/liveauction_page.css";
import "../../assets/css/all_page.css"
import NavBar from "../../component/navBar";
import Footer_other from "../../component/footer_other";
import LiveAuctionOther from "../../component/liveauctionother";
const LiveAuctionpage = () => {
    const liveAuction4Info = {
        username : "Jordan Nico",
        avatar : "assets/image/avatar.png",
        photoOfGood : "assets/image/good.png",
        time : {
          hour : 2,
          minute : 15,
          second : 10,
        },
        nameOfGood : "Metaverser",
        price : "5.1 ETH",
        color : "#FCFCFC",
        margintop : "-7.28rem"
      }
  return (
    <div>
      <NavBar></NavBar>
      <div className="liveauction">
        <div className="header-liveauciton">
          <div >Live Auction</div>
          <div className="right-header-liveauciton">
            <div className="blue-element-header-liveauciton">All</div>
            <div className="element-header-liveauciton">Art</div>
            <div className="element-header-liveauciton">Music</div>
            <div className="element-header-liveauciton">Collectibles</div>
          </div>
        </div>
        <div className="main-liveauciton">
            <LiveAuctionOther info={liveAuction4Info}></LiveAuctionOther>
            <LiveAuctionOther info={liveAuction4Info}></LiveAuctionOther>
            <LiveAuctionOther info={liveAuction4Info}></LiveAuctionOther>
            <LiveAuctionOther info={liveAuction4Info}></LiveAuctionOther>
        </div>
        <div className="learnmore" style={{ marginTop: "7.2rem" }}>
          Learn More
        </div>
      </div>
      <Footer_other></Footer_other>
    </div>
  );
};
export default LiveAuctionpage;
