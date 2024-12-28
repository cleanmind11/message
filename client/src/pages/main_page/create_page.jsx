import Footer_other from "../../component/footer_other";
import LiveAuction from "../../component/liveAuction";
import NavBar from "../../component/navBar";
import "../../assets/css/create_page.css";
import "../../assets/css/all_page.css";
const Createpage = () => {
  const liveAuction4Info = {
    username: "Jordan Nico",
    avatar: "assets/image/avatar.png",
    photoOfGood: "assets/image/good.png",
    time: {
      hour: 2,
      minute: 15,
      second: 10,
    },
    nameOfGood: "Metaverser",
    price: "5.1 ETH",
    color: "#FCFCFC",
    margintop: "-7.28rem",
  };
  return (
    <div>
      <NavBar />
      <div className="header-create">Create Item</div>
      <div className="create1">
        <div className="left-create">
          <div>Preview Item</div>
          <LiveAuction info={liveAuction4Info}></LiveAuction>
        </div>
        <div className="right-create">
          <div className="up-right-create">
            <div className="left-up-right-create">
              <p>Title</p>
              <input
                type="text"
                className="inputtype"
                placeholder="e.g. The Floating Pilot"
              ></input>
              <p style={{ marginTop: "3.2rem" }}>Price</p>
              <input
                type="text"
                className="inputtype"
                placeholder="e.g. The Floating Pilot"
              ></input>
              <p style={{ marginTop: "3.2rem" }}>Collection</p>
              <input
                type="text"
                className="inputtype"
                placeholder="e.g. The Floating Pilot"
              ></input>
            </div>
            <div className="right-up-right-create">
              <div>Uploads</div>
              <div className="upload">
                <p1>Upload Files</p1>
                <p2>JPG, PNG, GIF, WEBP, or MP4. Max 200mb.</p2>
                <svg
                  id="button"
                  xmlns="http://www.w3.org/2000/svg"
                  width="162"
                  height="50"
                  viewBox="0 0 162 50"
                >
                  <rect
                    id="button-2"
                    data-name="button"
                    width="162"
                    height="50"
                    rx="16"
                    fill="#1c83e5"
                  />
                  <g
                    id="cloud-upload_1"
                    data-name="cloud-upload 1"
                    transform="translate(32 13)"
                  >
                    <path
                      id="XMLID_270"
                      data-name="XMLID 270"
                      d="M17.229,6.216A6.748,6.748,0,0,0,4.03,4.838,6,6,0,0,0,6,16.5h9.75A5.248,5.248,0,0,0,17.229,6.216ZM14.193,8.537A.751.751,0,0,1,13.5,9H12v3a1.5,1.5,0,0,1-3,0V9H7.5a.75.75,0,0,1-.53-1.28l3-3a.75.75,0,0,1,1.061,0l3,3a.75.75,0,0,1,.163.818Z"
                      transform="translate(1.5 3)"
                      fill="#fcfcfc"
                    />
                  </g>
                  <text
                    id="Upload"
                    transform="translate(72 13)"
                    fill="#fcfcfc"
                    font-size="16"
                    font-family="SegoeUI, Segoe UI"
                  >
                    <tspan x="3.395" y="17">
                      Upload
                    </tspan>
                  </text>
                </svg>
              </div>
              <div>
                <div>Royalties</div>
                <input
                  type="text"
                  className="inputtype"
                  placeholder="5%"
                ></input>
              </div>
            </div>
          </div>
          <div className="center-right-create">
            <div>Method</div>
            <div className="method">
              <div className="method-element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                >
                  <g id="tag" transform="translate(-4 -4)">
                    <path
                      id="Vector"
                      d="M38.2,17.4,21.4.6A1.816,1.816,0,0,0,20,0H2A1.89,1.89,0,0,0,0,2V20a1.816,1.816,0,0,0,.6,1.4L17.4,38.2a5.8,5.8,0,0,0,8.4,0L38.2,25.8A5.8,5.8,0,0,0,38.2,17.4ZM11,14a3.076,3.076,0,0,1-3-3,3.076,3.076,0,0,1,3-3,3.076,3.076,0,0,1,3,3A3.076,3.076,0,0,1,11,14Z"
                      transform="translate(4 4)"
                      fill="#1c83e5"
                    />
                  </g>
                </svg>
                <p4>Fixed</p4>
              </div>
              <div className="method-element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32.021"
                  height="37.971"
                  viewBox="0 0 32.021 37.971"
                >
                  <g id="timer" transform="translate(-8.029 -5)">
                    <path
                      id="Vector"
                      d="M11.971,4h8a1.89,1.89,0,0,0,2-2,1.89,1.89,0,0,0-2-2h-8a1.89,1.89,0,0,0-2,2A1.89,1.89,0,0,0,11.971,4Zm16.6,8.2,1.8-1.8a1.98,1.98,0,1,0-2.8-2.8l-1.8,1.8a15.644,15.644,0,0,0-19.6,0l-1.8-1.8a1.933,1.933,0,0,0-2.8,0,1.933,1.933,0,0,0,0,2.8l1.8,1.8a15.962,15.962,0,0,0,25.2,19.6A15.644,15.644,0,0,0,28.571,12.2ZM19.371,24a4.125,4.125,0,0,1-3.4,2,4.012,4.012,0,0,1-4-4,3.871,3.871,0,0,1,2-3.4V14a1.89,1.89,0,0,1,2-2,1.89,1.89,0,0,1,2,2v4.6A3.725,3.725,0,0,1,19.371,24Z"
                      transform="translate(8.029 5)"
                      fill="#1c83e5"
                    />
                  </g>
                </svg>

                <p4>Fixed</p4>
              </div>
              <div className="method-element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="46.7"
                  viewBox="0 0 47 46.7"
                >
                  <g id="People" transform="translate(-0.5 -0.6)">
                    <path
                      id="Vector"
                      d="M15.8,7.9A7.9,7.9,0,1,1,7.9,0,7.9,7.9,0,0,1,15.8,7.9Z"
                      transform="translate(16.1 7.9)"
                      fill="#1c83e5"
                    />
                    <path
                      id="Vector-2"
                      data-name="Vector"
                      d="M17.3,27.3H5.3A5.335,5.335,0,0,0,0,32.6V45.1a37.652,37.652,0,0,0,11.3,1.6,41.127,41.127,0,0,0,11.3-1.6V32.6A5.335,5.335,0,0,0,17.3,27.3ZM23.5,0a7.948,7.948,0,0,0-7.6,5.8,10.476,10.476,0,0,1,5.9,9.4v.4a9.908,9.908,0,0,0,1.8.2,7.853,7.853,0,0,0,7.9-7.9A8,8,0,0,0,23.5,0Z"
                      transform="translate(12.7 0.6)"
                      fill="#1c83e5"
                    />
                    <path
                      id="Vector-3"
                      data-name="Vector"
                      d="M41.7,20H32.8a10.806,10.806,0,0,1-5.1,4.8h1.8a7.917,7.917,0,0,1,7.9,7.9v6.9A37.078,37.078,0,0,0,47,38V25.3A5.335,5.335,0,0,0,41.7,20ZM13.1,15.6v-.4A10.476,10.476,0,0,1,19,5.8,7.891,7.891,0,0,0,3.5,7.9a7.853,7.853,0,0,0,7.9,7.9A11.135,11.135,0,0,0,13.1,15.6Zm-3.5,17a7.917,7.917,0,0,1,7.9-7.9h1.9a10.806,10.806,0,0,1-5.1-4.8h-9A5.335,5.335,0,0,0,0,25.2V37.7a37.809,37.809,0,0,0,9.6,1.6Z"
                      transform="translate(0.5 0.6)"
                      fill="#1c83e5"
                    />
                  </g>
                </svg>

                <p4>Fixed</p4>
              </div>
            </div>
            <div style={{marginTop:"3.2rem"}}>
                <p>Description</p>
                <textarea placeholder='e.g. "Limited Outerspace series"'></textarea>
            </div>
          </div>
        </div>
      </div>
      <Footer_other></Footer_other>
    </div>
  );
};
export default Createpage;
