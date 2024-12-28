import "../../assets/css/second_page.css";
import "../../assets/css/all_page.css"
import NavBar from "../../component/navBar";
import Footer_other from "../../component/footer_other";
import AbstractNature from "../../component/AbstractNature";
const abstractinfo = {
    photo : "assets/image/pic_ryb_itten.jpg",
    name : "Abstract Nature",
    time : {
        hour : 2,
        minute : 16,
        second : 27,
    },
    viewnumber : 550,
    heartnumber : 150,
    description : "There's no limit to the beauty of nature. Everyone has a unique way to express this abstract work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar : "assets/image/bird.jpg",
    createdby : "JimXVic",
    collection : "Abstract Attractive",
    price : 0.042,
    bidhistory : [
        {
            avatar : "assets/image/bird.jpg",
            price : 0.003,
            by : "Rowan",
            date : {
                year : 2022,
                month : 3,
                day : 15.
            },
            time : {
                hour : 10,
                minute : 15,
                apm : "AM"
            }
        },
        {
            avatar : "assets/image/avatar2.jpg",
            price : 0.004,
            by : "Jack-O",
            date : {
                year : 2022,
                month : 3,
                day : 15.
            },
            time : {
                hour : 11,
                minute : 26,
                apm : "AM"
            }
        },
        {
            avatar : "assets/image/avatar1.jpg",
            price : 0.005,
            by : "BoBoHoo",
            date : {
                year : 2022,
                month : 3,
                day : 15.
            },
            time : {
                hour : 12,
                minute : 3,
                apm : "PM"
            }
        },
    ],
    comment : [
        {
            by : "Rowan",
            commenttext : "Hello, this is very expensive for me",
        },
        {
            by : "Jack-O",
            commenttext : "You are rober"
        }
    ],
}
const Secondpage = () => {
    return(
        <div>
            <NavBar></NavBar>
            <AbstractNature info = {abstractinfo}/>
            <Footer_other></Footer_other>
        </div>
    );
}
export default Secondpage;