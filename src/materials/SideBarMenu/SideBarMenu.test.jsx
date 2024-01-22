import { render, screen } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

describe("element", () => {
  test("Title menu :", () => {
    render(<App />);
    expect(screen.getByText(/ปัญหาประจำวัน/)).toBeInTheDocument();
  });

  test("search menu :", () => {
    render(<App />);
    expect(screen.getByText(/ค้นหาข้อมูล/)).toBeInTheDocument();
  });

  test("record menu :", () => {
    render(<App />);
    expect(screen.getByText(/บันทึกข้อมูล/i)).toBeInTheDocument();
  });

  test("info menu :", () => {
    render(<App />);
    expect(screen.getByText(/เกี่ยวกับ/)).toBeInTheDocument();
  });

  test("logout menu :", () => {
    render(<App />);
    expect(screen.getByText(/ออกจากระบบ/)).toBeInTheDocument();
  });
});

function clickMenu(nameText) {
  userEvent.click(screen.getByText(nameText));
}
describe("functional check", () => {
  test("click title", () => {
    render(<App />);
    clickMenu("ปัญหาประจำวัน");
    expect(window.location.pathname).toMatch("/");
  });
  test("click search", () => {
    render(<App />);
    clickMenu("ค้นหาข้อมูล");
    expect(window.location.pathname).toMatch("/search");
  });
});
