import "./HomeComponent.css";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

export default function HomeComponent() {
  const data = [
    {
      name: "jan",
      injection_department: 6,
      blow_department: 3,
      printing_department: 5,
      lab_department: 10,
      amt: 10,
    },
    {
      name: "feb",
      injection_department: 5,
      blow_department: 10,
      printing_department: 6,
      lab_department: 3,
      amt: 10,
    },
    {
      name: "mar",
      injection_department: 7,
      blow_department: 12,
      printing_department: 10,
      lab_department: 6,
      amt: 10,
    },
    {
      name: "apr",
      injection_department: 10,
      blow_department: 4,
      printing_department: 7,
      lab_department: 12,
      amt: 10,
    },
  ];
  return (
    <div id="box-HomeComponent">
      <BarChart id="cart-HomeChart" width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="injection_department" fill="rgb(230, 0, 0)" />
        <Bar dataKey="blow_department" fill=" rgb(204, 179, 0)" />
        <Bar dataKey="printing_department" fill=" rgb(0, 179, 179)" />
        <Bar dataKey="lab_department" fill=" rgb(77, 179, 128)" />
      </BarChart>
    </div>
  );
}
// <div id="HomeComponent" className="">
//   <div id="box-HomeComponent">
//     <div id="box-HomeComponent-title">
//       <h1 id="title-HomeComponent">ระบบบันทึกข้อมูล</h1>
//     </div>
//     <div id="box-HomeComponent-content">
//       <h3 id="search-HomeComponent">
//         <Link to={"/search"}>ค้นหาข้อมูล</Link>
//       </h3>
//       <h3 id="search-HomeComponent">
//         <Link to={"/record"}>บันทึกข้อมูล</Link>
//       </h3>
//     </div>
//   </div>
// </div>
