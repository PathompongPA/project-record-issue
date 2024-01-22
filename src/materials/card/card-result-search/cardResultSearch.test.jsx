import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../../../App";
import userEvent from "@testing-library/user-event";

describe("element", () => {
  test("department", async () => {
    render(<App />);
    waitFor(() => {
      fireEvent.click(screen.getByText(/ค้นหาข้อมูล/));
      fireEvent.click(screen.getByText(/ค้นหา/));
    });
    expect(screen.getByText(/ฉีด/)).toBeInTheDocument();
  });
});

// describe("functional check", () => {});
