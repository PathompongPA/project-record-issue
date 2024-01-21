import "./btn-back.css";
import { useNavigate } from "react-router-dom";

export default function BtnBack() {
  const navigation = useNavigate();
  return (
    <button
      id="btn-back"
      onClick={(e) => {
        e.preventDefault();
        navigation("/");
      }}
    >
      back
    </button>
  );
}
