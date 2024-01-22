import { useContext, useEffect } from "react";
import "./cardResultSearch.css";
import GetDataFromServeAndSetState from "../../../utilities/httpMethod";
import { Context } from "../../../App";

export default function CardResultSearch() {
  const { state, dispatch } = useContext(Context);
  const listDepartmentForIdentify = ["ฉีด", "เป่า", "พิม", "แล็ป"];
  let listRecord = state.Record.map((props, index) => {
    console.log(props);
    return (
      <div>
        <div key={"index-" + index}>{index + 1}</div>
        <div key={"Department-" + index}>
          {listDepartmentForIdentify[props.Department_Key - 1]}
        </div>
        <div key={"Issue-" + index}>{props.Issue}</div>
        <div key={"Note-" + index}>{props.Note}</div>
        <div key={"date-" + index}>{props.date_edit}</div>
        <button value={index} key={"edit-" + index}>
          edit
        </button>
        <button value={index} key={"save-" + index}>
          save
        </button>
        <button value={index} key={"delete-" + index}>
          del
        </button>
      </div>
    );
  });

  return <>{listRecord}</>;
}
