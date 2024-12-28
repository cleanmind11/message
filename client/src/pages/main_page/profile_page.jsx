import "../../assets/css/all_page.css"
import "../../assets/css/profile_page.css"
import NavBar from "../../component/navBar";
import Footer_other from "../../component/footer_other";
import JimXVic from "../../component/jimxvic";
import Portfolio from "../../component/portfolio";
import Collection from "../../component/collection";
const Profilepage = () => {
    return (
        <>
            <NavBar></NavBar>
            <JimXVic></JimXVic>
            <Portfolio></Portfolio>
            <Collection></Collection>
            <Footer_other></Footer_other>
        </>
    );
}
export default Profilepage;