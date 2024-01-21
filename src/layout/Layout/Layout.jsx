import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../../materials";
import "./layout.css";

export default function Layout() {
  return (
    <div id="layout">
      <SideBarMenu />
      <Outlet />
    </div>
  );
}
