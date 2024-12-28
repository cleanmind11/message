import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./component/navBar";
import Mainpage from "./pages/main_page/main_page";
import Secondpage from "./pages/main_page/second_page";
import Chatpage from "./pages/main_page/chat";
import Login from "./pages/main_page/login_page";
import Profilepage from "./pages/main_page/profile_page";
import LiveAuction from "./component/liveAuction";
import LiveAuctionpage from "./pages/main_page/liveauction";
import Createpage from "./pages/main_page/create_page";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Login></Login>} />
          <Route path="/home" element={<Mainpage />} />
          <Route path="/Abstract" element={<Secondpage />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/Profile" element={<Profilepage />} />
          <Route path="/LiveAuction" element={<LiveAuctionpage></LiveAuctionpage>} />
          <Route path="/create" element={<Createpage></Createpage>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
