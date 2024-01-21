import { useContext, useEffect } from "react";
import "./cardResultSearch.css";
import GetDataFromServeAndSetState from "../../../utilities/httpMethod";
import { Context } from "../../../App";

export default function CardResultSearch() {
  const [state, dispatch] = useContext(Context);
  console.log("call : CardResultSearch component");
  console.log("data send to CardResultSearch  component : ", state);
  const ArrayDepartments = ["", "ฉีด", "เป่า", "พิม", "แล็ป"];

  useEffect(() => {}, [state, dispatch]);

  function _createElementDom(index) {
    const _form = document.getElementById("form-card-result" + index);
    const _inputDepartment = document.getElementById(
      "result-search-department" + index
    );
    const _inputIndex = document.getElementById("result-search-index" + index);
    const _inputIssue = document.getElementById("result-search-issue" + index);
    const _inputNote = document.getElementById("result-search-note" + index);
    const _inputDate = document.getElementById("result-search-date" + index);
    const _btnEdit = document.getElementById("btn-edit-card-result" + index);
    const _btnSave = document.getElementById("btn-save-card-result" + index);
    const _btnDel = document.getElementById("btn-delete-card-result" + index);
    return {
      form: _form,
      inputDepartment: _inputDepartment,
      inputIndex: _inputIndex,
      inputIssue: _inputIssue,
      inputNote: _inputNote,
      inputDate: _inputDate,
      btnEdit: _btnEdit,
      btnSave: _btnSave,
      btnDel: _btnDel,
    };
  }

  function _toggleBackgroundColor(index) {
    _createElementDom(index).form.classList.toggle("add-bg");
    _createElementDom(index).inputIndex.classList.toggle("add-bg");
    _createElementDom(index).inputDepartment.classList.toggle("add-bg");
    _createElementDom(index).inputIssue.classList.toggle("add-bg");
    _createElementDom(index).inputNote.classList.toggle("add-bg");
    _createElementDom(index).inputDate.classList.toggle("add-bg");
  }

  function _toggleModeInput(index) {
    const isReadOnly = _createElementDom(index).inputDepartment.readOnly;
    _createElementDom(index).inputDepartment.readOnly = !isReadOnly;
    _createElementDom(index).inputIssue.readOnly = !isReadOnly;
    _createElementDom(index).inputNote.readOnly = !isReadOnly;
    _createElementDom(index).inputDate.readOnly = !isReadOnly;
  }
  function _toggleShowBtnSaveAndBtnDel(index) {
    _createElementDom(index).btnEdit.classList.toggle("hide");
    _createElementDom(index).btnSave.classList.toggle("hide");
    _createElementDom(index).btnDel.classList.toggle("hide");
  }

  function onClickBtnEdit(e) {
    // 1. Show btn save and btn del
    // 2. change background-color
    // 3. Focus input index 0
    e.preventDefault();
    const index = e.target.value;
    _toggleShowBtnSaveAndBtnDel(index);
    _toggleBackgroundColor(index);
    _toggleModeInput(index);
    _createElementDom(index).inputDepartment.focus();
  }

  function onClickBtnSave(e) {
    // 1. Hide edit btn
    // 2. Check data in from
    //    2.1 Case data no change
    //        1 no action
    //    2.2 Case data change
    //        1. Send data to server
    //        2. Send response to user
    //        2. Redirect to home page
    e.preventDefault();
    const index = e.target.value;
    _toggleShowBtnSaveAndBtnDel(index);
    _toggleModeInput(index);
    _toggleBackgroundColor(index);
  }

  function onClickBtnDel(e) {
    // 1. Alert to user confirm delete
    //    1.1 Case yes
    //      1. Send data to server and delete
    //      2. Send response to user and redirect to home page
    //    1.2 Case No
    //      1. No action
    e.preventDefault();
    const index = e.target.value;
    const msgConfirmDelete = "Do you want to delete";
    if (window.confirm(msgConfirmDelete)) {
      // _createElementDom(index).form.classList.toggle("hide");
      const body = state.Record[index];
      GetDataFromServeAndSetState(
        "http://192.168.1.64:11111/issue",
        "Delete",
        body,
        dispatch,
        "default"
      );
      GetDataFromServeAndSetState(
        "http://192.168.1.64:11111/record",
        "POST",
        state.SearchForm,
        dispatch,
        "add-Record"
      );
    }
  }

  return (
    <div id="card-result">
      {state.Record &&
        state.Record.map((prop, index) => {
          return (
            <form
              key={"form-card-result" + index + 1}
              id={"form-card-result" + index}
              className={"form-card-result"}
              onChange={(e) => {
                console.log("onChange e : ", e);
              }}
            >
              <div id="box-card" key={"box-card" + index + 1}>
                <input
                  id={"result-search-index" + index}
                  className="title-card-result"
                  defaultValue={index + 1}
                  key={index + 1}
                  required
                  readOnly
                ></input>
                <input
                  id={"result-search-department" + index}
                  className="title-card-result"
                  defaultValue={ArrayDepartments[prop.Department_Key]}
                  key={ArrayDepartments[prop.Department_Key]}
                  required
                  readOnly
                ></input>
                <input
                  id={"result-search-issue" + index}
                  className="title-card-result"
                  defaultValue={prop.Issue}
                  key={prop.Issue}
                  required
                  readOnly
                ></input>
                <input
                  id={"result-search-note" + index}
                  className="title-card-result"
                  defaultValue={prop.note}
                  key={prop.note}
                  required
                  readOnly
                ></input>
                <input
                  id={"result-search-date" + index}
                  className="title-card-result"
                  type="datetime-local"
                  defaultValue={prop.date_edit}
                  key={prop.date_edit}
                  required
                  readOnly
                ></input>
                <div
                  id="box-button-result"
                  className="title-card-result"
                  key={"box-btn-result" + index + 1}
                >
                  <button
                    id={"btn-edit-card-result" + index}
                    onClick={onClickBtnEdit}
                    type="button"
                    key={"btn-edit-card-result"}
                    className=""
                    value={index}
                  >
                    edit
                  </button>
                  <button
                    id={"btn-save-card-result" + index}
                    type="button"
                    key={"btn-save-card-result"}
                    value={index}
                    className={"hide"}
                    onClick={onClickBtnSave}
                  >
                    save
                  </button>
                  <button
                    id={"btn-delete-card-result" + index}
                    type="button"
                    key={"btn-del-card-result"}
                    value={index}
                    className="hide"
                    onClick={onClickBtnDel}
                  >
                    del
                  </button>
                </div>
              </div>
            </form>
          );
        })}
    </div>
  );
}
