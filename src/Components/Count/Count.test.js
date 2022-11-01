import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Count";

describe("Click Count", () => {
  test("Click Event Test", () => {
    render(<Counter />);
    const countheading = screen.getByRole("heading");
    expect(countheading).toBeInTheDocument();

    const incrementbtn = screen.getByRole("button", { name: "Increment" });
    expect(incrementbtn).toBeInTheDocument();
  });

  test("Counter is at 0", () => {
    render(<Counter />);
    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("0");
  });

  test("render count of 1 after clicking a button", async () => {
    user.setup();
    render(<Counter />);
    const incrementbtn = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementbtn);
    expect(incrementbtn).toBeInTheDocument();

    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("1");
  });

  test.only("render count of 2 after double clicking a button", async () => {
    user.setup();
    render(<Counter />);
    const incrementbtn = screen.getByRole("button", { name: "Increment" });

    await user.dblClick(incrementbtn);
    expect(incrementbtn).toBeInTheDocument();

    const countEl = screen.getByRole("heading");
    expect(countEl).toHaveTextContent("2");
  });
});
