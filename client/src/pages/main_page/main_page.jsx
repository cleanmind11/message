import "../../assets/css/main_page.css";
import "../../assets/css/all_page.css"
import logo from "../../assets/image/list.svg"
import NavBar from "../../component/navBar";
import HowItWork from "../../component/howItWork";
import Header from "../../component/header";
import LiveAuction from "../../component/liveAuction";
import Circle from "../../component/circle";
import TopArtist from "../../component/topArtist";
import map from "../../assets/image/map.svg";
import Category from "../../component/category";
import PopularCollection from "../../component/popularCollection";
import WhyChooseUs from "../../component/whychooseus";
import Faq from "../../component/faq";
import Footer_main from "../../component/footer_main";

const howItWork1Info = {
  icon: "assets/image/setwallet.svg",
  title: "Set you wallet",
  text: "Decide which wallet you want to use as your transaction method",
  number: "01",
};
const howItWork2Info = {
  icon: "assets/image/addNFT.svg",
  title: "Add your NFT's",
  text: "If you are a creator/designer, you can add your NFTs to the display",
  number: "02",
};
const howItWork3Info = {
  icon: "assets/image/buysellNFT.svg",
  title: "Buy/Sell your Collection/NFT's",
  text: "You can buy the NFTs you like or sell your NFTs to earn some cash",
  number: "03",
};
const howItWorkArray = [howItWork1Info, howItWork2Info, howItWork3Info];

const howItWorkList = howItWorkArray.map((item, index) => <HowItWork info={item} key={index} />)

const headerOfThirdInfo = {
  title : "Live Auctions",
  text : "Find your favorite category here"
}

const headerOfFourtInfo = {
  title : "Top Artist",
  text : "The hands that create many interesting NFTs"
}

const headerOfFifth = {
  title : "Explore by Category",
  text : "Find your favorite category here"
}

const headrOfSixth = {
  title : "Popular Collections",
  text : "Here the popular collections"
}

const liveAuction1Info = {
  username : "JimXVic",
  avatar : "assets/image/avatar.png",
  photoOfGood : "assets/image/good.png",
  nameOfGood : "Abstract Nature",
  price : "5.1 ETH",
  time : {
    hour : 2,
    minute : 1,
    second : 3,
  },
  buttoncolor : "#E6EFFA",
  buttonmargintop : "-2.5rem"
}
const liveAuction2Info = {
  username : "BunnyBun",
  avatar : "assets/image/avatar.png",
  photoOfGood : "assets/image/good.png",
  time : {
    hour : 2,
    minute : 15,
    second : 10,
  },
  nameOfGood : "Extraterrestrial",
  price : "4.5 ETH",
    buttoncolor : "#E6EFFA",
  buttonmargintop : "-2.5rem"
}

const liveAuction3Info = {
  username : "Samantha W.",
  avatar : "assets/image/avatar.png",
  photoOfGood : "assets/image/good.png",
  time : {
    hour : 2,
    minute : 15,
    second : 10,
  },
  nameOfGood : "Cute Animal",
  price : "2.9 ETH",
    buttoncolor : "#E6EFFA",
  buttonmargintop : "-2.5rem"
}

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
  buttoncolor : "#E6EFFA",
  buttonmargintop : "-2.5rem"
}
const liveAuctionArray = [liveAuction1Info, liveAuction2Info, liveAuction3Info,liveAuction4Info];

const liveAuctionList = liveAuctionArray.map((item, index) => <LiveAuction info={item} key={index} />)

const Circle1Info = {
  radius : "1.2rem",
  backgroundColor : "#1C83E5",
}
const Circle2Info = {
  radius : "1.2rem",
  backgroundColor : "#D0D0D2",
}
const CircleArray = [Circle1Info, Circle2Info,Circle2Info,Circle2Info,Circle2Info,Circle2Info];
const CircleList = CircleArray.map((item,index) => <Circle info={item} key={index}/>)

const topArtist1Info = {
  name : "Sera Cobalt",
  price : "250.8 ETH",
  photoOfGood : "assets/image/placeholder.png"
}
const topArtist2Info = {
  name : "Thomas Cox",
  price : "234.2 ETH",
  photoOfGood : "assets/image/placeholder.png"
}
const topArtist3Info = {
  name : "Dalvin Chuck",
  price : "210.5 ETH",
  photoOfGood : "assets/image/placeholder.png"
}
const topArtist4Info = {
  name : "Trixx Arix",
  price : "194.3 ETH",
  photoOfGood : "assets/image/placeholder.png"
}
const topArtist6Info = {
  name : "Tony Soap",
  price : "150.8 ETH",
  photoOfGood : "assets/image/placeholder.png"
}
const topArtist5Info = {
  name : "Hub Fort",
  price : "188.9 ETH",
  photoOfGood : "assets/image/placeholder.png"
}

const topArtistArray = [topArtist1Info,topArtist2Info,topArtist3Info,topArtist4Info,topArtist5Info,topArtist6Info]
const topArtistList = topArtistArray.map((item,index) => <TopArtist info = {item} key={index}/>)

const category1Info = {
  name : "Art",
  icon : "assets/image/art.svg"
}

const category2Info = {
  name : "music",
  icon : "assets/image/music.svg"
}

const category3Info = {
  name : "Game Items",
  icon : "assets/image/game.svg"
}

const category4Info = {
  name : "Trading Cards",
  icon : "assets/image/cards.svg"
}

const category5Info = {
  name : "Collectibles",
  icon : "assets/image/collectibles.svg"
}

const category6Info = {
  name : "Miscellaneous",
  icon : "assets/image/miscellaneous.svg"
}

const categoryArray = [category1Info,category2Info,category3Info,category4Info,category5Info,category6Info]
const categoryList = categoryArray.map((item,index) => <Category info = {item} key={index}/>)

const popularCollectionInfo = [
  {
    name : "Cute Things",
    text : "Created by Sera Cobalt",
    photoOfGood : "assets/image/popularcollection.png",
    heart : 150,
  },
  {
    name : "Cute Things",
    text : "Created by Sera Cobalt",
    photoOfGood : "assets/image/popularcollection.png",
    heart : 150,
  },
  {
    name : "Cute Things",
    text : "Created by Sera Cobalt",
    photoOfGood : "assets/image/popularcollection.png",
    heart : 150,
  },
]
const popularCollectionList = popularCollectionInfo.map((item,index) => <PopularCollection info={item} key={index}/>)
const whychooseusInfo = [
  {
    title : "1. High-Quality Artworks",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title : "2. Crypto Market Daily Report",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title : "3. The Immersive World of NFTs",
    text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
const whychooseusList = whychooseusInfo.map((item,index) => <WhyChooseUs info = {item} key={index}/>)

const faqInfo = [
  {
    question : "How to buy NFTs?",
    answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    question : "How to create NFTs?",
    answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    question : "How to join the auction?",
    answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    question : "How to withdraw the coin?",
    answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    question : "Does the transaction worth it?",
    answer : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
]
const faqList = faqInfo.map((item,index) => <Faq info = {item} key={index}/>)
const Mainpage = () => {
  return (
    <div className="page-color">
      <NavBar></NavBar>
      <div id="up-main">
        <div id="first">
          <div className="left-first">
            <div className="fs-80 title-of-first">
              A New Way to Appreciate the 
              <span className="color-blue"> Artworks.</span>
            </div>
            <div className="fs-24 text-of-first">
              Find the most attractive and rarest NFTs to be your collection
            </div>
            <button id="Explore" className="blueButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <path id="Vector"d="M10,8.9A1.1,1.1,0,1,0,11.1,10,1.1,1.1,0,0,0,10,8.9ZM10,0A10,10,0,1,0,20,10,10,10,0,0,0,10,0Zm2.19,12.19L4,16,7.81,7.81,16,4Z" fill="#fcfcfc"/>
                </svg>
                <div>Explore</div>
             </button>
          </div>
          <img className="first-image" src={map} />
          {/* <img src={map} /> */}
        </div>
        <div id="second">
          <div id="titleOfSecond" className="fs-48">
            How It Work
          </div>
          <div className="howItWorkList">
            {howItWorkList}
          
          </div>
        </div>
        <div id = "third">
          <Header info = {headerOfThirdInfo}/>
          <div className="liveAuctionList">
            {liveAuctionList} 
          </div>
          <div className="footer-third">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27.006" height="12.402" viewBox="0 0 27.006 12.402">
                <g id="Arrow" transform="translate(-10.494 -18) rotate(90)">
                  <path id="Vector" d="M6.2-27a1.574,1.574,0,0,0-1.095.439A1.477,1.477,0,0,0,4.651-25.5V-5.112l-2-1.95a1.581,1.581,0,0,0-1.1-.441,1.581,1.581,0,0,0-1.1.441A1.483,1.483,0,0,0,0-6,1.483,1.483,0,0,0,.455-4.932L5.1-.432A1.565,1.565,0,0,0,5.9-.027a1.6,1.6,0,0,0,.893-.09,1.539,1.539,0,0,0,.7-.549A1.467,1.467,0,0,0,7.748-1.5v-24a1.477,1.477,0,0,0-.454-1.061A1.574,1.574,0,0,0,6.2-27Z" transform="translate(18 -10.503)" fill="#d0d0d2"/>
                  <path id="Vector-2" data-name="Vector" d="M6.2-7.506a1.592,1.592,0,0,0-.594.111,1.553,1.553,0,0,0-.5.324L.455-2.571A1.483,1.483,0,0,0,0-1.506,1.465,1.465,0,0,0,.118-.93a1.5,1.5,0,0,0,.337.489,1.559,1.559,0,0,0,.5.326A1.6,1.6,0,0,0,1.555,0a1.581,1.581,0,0,0,1.1-.441L7.3-4.941a1.5,1.5,0,0,0,.339-.488,1.459,1.459,0,0,0,.119-.577,1.459,1.459,0,0,0-.119-.577A1.5,1.5,0,0,0,7.3-7.071a1.553,1.553,0,0,0-.5-.324A1.592,1.592,0,0,0,6.2-7.506Z" transform="translate(22.645 -10.494)" fill="#d0d0d2"/>
                </g>
              </svg>
            </div>
            <div className="center-footer-third">
              {CircleList}
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="27.006" height="12.402" viewBox="0 0 27.006 12.402">
                <g id="Arrow" transform="translate(37.5 -18) rotate(90)">
                  <path id="Vector" d="M6.2,27a1.574,1.574,0,0,1-1.095-.439A1.477,1.477,0,0,1,4.651,25.5V5.112l-2,1.95a1.59,1.59,0,0,1-2.2,0,1.473,1.473,0,0,1,0-2.13L5.1.432A1.565,1.565,0,0,1,5.9.027a1.6,1.6,0,0,1,.893.09,1.539,1.539,0,0,1,.7.549,1.467,1.467,0,0,1,.264.831v24a1.477,1.477,0,0,1-.454,1.061A1.574,1.574,0,0,1,6.2,27Z" transform="translate(18 10.503)" fill="#1c83e5"/>
                  <path id="Vector-2" data-name="Vector" d="M6.2,7.506a1.592,1.592,0,0,1-.594-.111,1.553,1.553,0,0,1-.5-.324L.455,2.571A1.483,1.483,0,0,1,0,1.506,1.465,1.465,0,0,1,.118.93,1.5,1.5,0,0,1,.455.441,1.559,1.559,0,0,1,.96.115,1.6,1.6,0,0,1,1.555,0a1.581,1.581,0,0,1,1.1.441L7.3,4.941a1.5,1.5,0,0,1,.339.488,1.457,1.457,0,0,1,0,1.154,1.5,1.5,0,0,1-.339.488,1.553,1.553,0,0,1-.5.324A1.592,1.592,0,0,1,6.2,7.506Z" transform="translate(22.645 10.494)" fill="#1c83e5"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div id = "fourth">
          <Header info={headerOfFourtInfo}/>
          <div className="topArtistList">
            {topArtistList}
          </div>
        </div>
        <div id = "fifth">
          <Header info = {headerOfFifth}/>
          <div className="categoryList">
            {categoryList}
          </div>
        </div>
        <div id = "sixth">
          <Header info = {headrOfSixth}/>
          <div className="popularcollectionlist">
            {popularCollectionList}
          </div>
        </div>
      </div>
      <div id = "center-main">
        <div id = "up-center-main">
          <p className="fs-48 title-up-center-main">
            Why You Have to Choose Us?
          </p>
          <p className="fs-18 text-up-center-main">
            Reasonable reasons to pick us, Here what we offer for you
          </p>
        </div>
        <div id = "down-center-main">
          {whychooseusList}
        </div>
      </div>
      <div id = "down-main">
        <div className="up-down-main">
          <div>
            <div className="fs-48 bigtitle-up-down-main">
              FAQs
            </div>
            <div className="fs-18 smalltitle-up-down-main">
              What people usually ask
            </div>
          </div>
          <div className="faqList">
            {faqList}
          </div>
        </div>
        <div className="center-down-main">
          <div className="fs-48 title-center-down-main">
            Investors & Patners
          </div>
          <div className="content-center-down-main">
            <img src={logo}></img>
          </div>
        </div>
        <div className="down-down-main">

        </div>
      </div>
      <div>
        <Footer_main/>
      </div>
    </div>
  );
};
export default Mainpage;
