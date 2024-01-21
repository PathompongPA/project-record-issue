import GetHttp from "./httpMethod";

export default async function GetIssue(body = {}, dispatch) {
  GetHttp(
    "http://192.168.1.64:11111/record",
    "POST",
    body,
    dispatch,
    "add-Record"
  );
}
