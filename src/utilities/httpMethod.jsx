export default function GetDataFromServeAndSetState(
  url,
  method = "GET",
  body = {},
  dispatch,
  actionType
) {
  // console.log("Body Product_Key : ", body.Product_Key);
  console.log("GetHttp");
  fetch(url, {
    method: method,
    body: method === "GET" ? undefined : JSON.stringify(body),
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: actionType, payload: res });
    })
    .catch((err) => {
      console.log("error in fetch search : ", err);
      return err;
    });
}
