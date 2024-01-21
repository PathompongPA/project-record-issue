import { useContext, useEffect } from "react";
import { BtnBack, CardResultSearch } from "../../materials";
import "./SearchComponent.css";
import { Context } from "../../App";

export default function SearchComponent() {
  const [state, dispatch] = useContext(Context);
  console.log("state : ", state);
  useEffect(() => {
    console.log("state in useEffect  SearchComponent : ", state);
    // GetProducts({}, dispatch);
    dispatch({ type: "clear-Record" });
  }, []);

  function submitFormSearch(e) {
    e.preventDefault();
    const body = {};
    body.Product_Key = e.target[0].value;
    dispatch({ type: "add-value-search-form", payload: body.Product_Key });
    // GetHttp("http://192.168.1.64:11111/record",)
  }

  return (
    <div id="SearchComponent">
      {state.Products && (
        <>
          <BtnBack />
          <div id="box-title-search">
            <h1 id="name-menu">ค้นหาข้อมูล</h1>
          </div>

          <div id="box-search">
            <form id="form-search" onSubmit={submitFormSearch}>
              <select
                id="input-search"
                name="user"
                list="search"
                defaultValue={"All"}
                placeholder="เลือกชิ้นงาน"
              >
                {state.Products && (
                  <>
                    <option value={"All"}>All</option>
                    {state.Products.map((prop) => {
                      return (
                        <option value={prop.Product_Key} key={prop.Product_Key}>
                          {prop.Product_Key + " | " + prop.Product_Name}
                        </option>
                      );
                    })}
                  </>
                )}
              </select>
              <input
                id="input-search-submit"
                type="submit"
                value="ค้นหา"
              ></input>
            </form>
          </div>

          <div>
            {state.Record && (
              <h4 id="num-result">ผลลัพธ์ : {state.Record.length}</h4>
            )}
          </div>

          {state.Record && (
            <div>
              <div id="title-card-result">
                {state.Record && (
                  <>
                    <h4 className="title-card-result">ลำดับ</h4>
                    <h4 className="title-card-result">แผนก</h4>
                    <h4 className="title-card-result">ปัญหา</h4>
                    <h4 className="title-card-result">note</h4>
                    <h4 className="title-card-result">วันที่</h4>
                  </>
                )}
              </div>
              <div id="box-result">
                <CardResultSearch />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
