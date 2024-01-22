import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BtnBack } from "../../materials";
import "./RecordComponent.css";
import GetDataFromServeAndSetState from "../../utilities/httpMethod";
import { Context } from "../../App";

export default function RecordComponent() {
  const navigation = useNavigate();
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    console.log(Date());
    document.getElementById("input-Date").defaultValue = Date();
  }, []);

  return (
    <div id="RecordComponent">
      <div id="box-RecordComponent">
        <BtnBack />
        <h1>บันทึกข้อมูล</h1>
        <form
          id="form-record"
          onSubmit={async (event) => {
            event.preventDefault();

            const body = {};
            body.Department = parseInt(event.target[0].value);
            body.date = event.target[1].value;
            body.Product_Key = event.target[2].value;
            body.Product_Name = event.target[3].value;
            body.Issue = event.target[4].value;
            body.note = event.target[5].value;
            console.log("body : ", body);
            GetDataFromServeAndSetState(
              "http://192.168.1.64:11111/issue",
              "POST",
              body,
              dispatch,
              "Products-delete"
            );
            await fetch("http://192.168.1.64:11111/issue", {
              method: "POST",
              body: JSON.stringify(body),
            })
              .then((res) => {
                return res.json();
              })
              .then((res) => {
                console.log(res);
              });
            console.log("refresh ");
            alert("recorded successfully");
            navigation("/");
          }}
        >
          <br />
          <select id="input-Department">
            <option value="01">ฉีด</option>
            <option value="02">เป่า</option>
            <option value="03">พิม+แพ็ค</option>
            <option value="04">แล็ป</option>
          </select>
          <input
            id="input-Date"
            name="date"
            type="datetime-local"
            required
          ></input>
          <br />
          <input
            id="input-Product-Key"
            className="input-record"
            name="p-key"
            placeholder="กรุณากรอก  'รหัสสินค้า'"
            required
          ></input>
          <br />
          <input
            id="input-Product-Name"
            className="input-record"
            name="p-name"
            placeholder="กรุณากรอก  'ชื่อสินค้า'"
            required
          ></input>
          <br />
          <input
            id="input-Issue"
            className="input-record"
            name="issue"
            placeholder="กรุณากรอก 'ปัญหา'"
            required
          ></input>
          <br />
          <input
            id="input-Note"
            className="input-record"
            name="note"
            placeholder="กรุณากรอก 'บันทึกข้อความ'"
            required
          ></input>
          <br />
          <input
            id="input-record-submit"
            className="input-record"
            name=""
            type="submit"
            value="submit"
            required
          ></input>
        </form>
      </div>
    </div>
  );
}
