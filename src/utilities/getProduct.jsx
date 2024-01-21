import GetHttp from "./httpMethod";

export default async function GetProducts(body = {}, dispatch) {
  GetHttp("http://192.168.1.64:11111/", "GET", body, dispatch, "add-Products");
}
