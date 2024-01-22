import "./SideBarMenu.css";
import { Link } from "react-router-dom";

export default function SideBarMenu() {
  return (
    <div id="box-SideBarMenu" className="">
      <div id="box">
        <div id="title-menu">
          <h1>
            <Link to={"/"}>ปัญหาประจำวัน</Link>
          </h1>
        </div>
        <br></br>
        <div id="menu-search">
          <Link to={"search"}>
            <h3>ค้นหาข้อมูล</h3>
          </Link>
        </div>
        <br></br>
        <div id="menu-record">
          <Link to={"record"}>
            <h3>บันทึกข้อมูล</h3>
          </Link>
        </div>
        <div id="menu-info">
          <Link to={"info"}>
            <h4>เกี่ยวกับ</h4>
          </Link>
        </div>
        <br />
        <div
          id="menu-logout"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <h4>ออกจากระบบ</h4>
        </div>
      </div>
    </div>
  );
}
