import { BtnBack } from "../../materials";
import "./InfoComponent.css";
export default function InfoComponent() {
  return (
    <div id="InfoComponent">
      <div id="box-InfoComponent">
        <BtnBack />
        <div id="info">
          <div id="box-info">
            <h1 id="info-title">ระบบบันทึกข้อมูล</h1>
            <br />
            <h4 id="info-description">
              ระบบบันทึกข้อมูลนี้ออกแบบเพื่อใช้ในการบันทึกข้อมูลปัญหาในการผลิตที่เคยเกิด
            </h4>
          </div>
          <div id="box-credit">
            <div id="box-credit-1" className="box-credit">
              <h5>ออกแบบโดย</h5>
              <h5>นาย ปฐมพงศ์ ลิ้มตระกูล</h5>
            </div>
            <div id="box-credit-2" className="box-credit">
              <h5>ซอฟแวร์</h5>
              <h5>docker react js epress mysql</h5>
            </div>
            <div id="box-credit-3" className="box-credit">
              <h5>พัฒนาโดย</h5>
              <h5>นาย ปฐมพงศ์ ลิ้มตระกูล</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
