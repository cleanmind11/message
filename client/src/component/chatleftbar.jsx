import UserList from "./userlist";

const ChatLeftBar = (props) => {
  // const userlistinfo = {
  //     avatar : "assets/image/bird.jpg",
  //     name : "Linkon",
  // }

  const userlistinfo = props.userlist;
  console.log(props.userlist);

  // console.log("userlistchdsfasdfasdf", userlistinfo, typeof userlistinfo)
  // console.log(userlistinfo.length)
  // for(let i=0; i<userlistinfo.length; i++) {
  //     console.log(userlistinfo[i]);
  // }
  // console.log("userlistchdsfasdfasdf", userlist)
  return (
    <div className="chatleftbar">
      <div className="up-chatleftbar">
        <div className="header-chatleftbar">
          <span>Messages</span>
          <div>{props.noreadmessagenumber}</div>
        </div>
        <input className="search-chatleftbar" placeholder="Search"></input>
        <div className="userlist-chatleftbar">
          {props.userlist.length > 0 && props.userlist.map((item, index) => (
            <UserList key={index} avatar={item.avatar} name={item.username} myinfo = {props.myinfo} setMsgHistory={props.setMsgHistory} setNowpartner={props.setNowpartner}/>
          ))}
        </div>
      </div>
      <div className="down-chatleftbar">
        <div>Log Out</div>
        <div>Settings</div>
        <div className="mystate-chatlefbar">
          <div className="avatar-mystate-chatleftbar">
            <img src={props.myinfo.avatar}></img>
          </div>
          <div>
            <button>{props.myinfo.username}</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatLeftBar;
