import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("some", () => {
  it("Title :", () => {
    render(<App />);
    expect(screen.getByText(/หาประจำวัน/)).toBeInTheDocument();
  });
});
