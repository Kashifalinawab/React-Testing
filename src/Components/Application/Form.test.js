import Form from "./Form";
import { render, screen } from "@testing-library/react";

describe("Form test", () => {
  test.only("Render Correctly", () => {
    render(<Form />);

    //getByTestId Mtd:
    const idEl = screen.getByTestId("GM");
    expect(idEl).toBeInTheDocument();

    //getByTitle Mtd
    const spanEL = screen.getByTitle("close");
    expect(spanEL).toBeInTheDocument();

    // getByText Mtd ie p tag
    const paraText = screen.getByText("All feilds are need to be filled");
    expect(paraText).toBeInTheDocument();

    //getByAltText Mtd
    const imgEl = screen.getByAltText("Employee");
    expect(imgEl).toBeInTheDocument();

    //getByRole Mtd:
    const nameEl = screen.getByRole("textbox");
    expect(nameEl).toBeInTheDocument();

    //getByLabelText Mtd:
    const nameEl2 = screen.getByLabelText("Name");
    expect(nameEl2).toBeInTheDocument();

    //getByPlaceholderText Mtd
    const nameEl3 = screen.getByPlaceholderText("YourName");
    expect(nameEl3).toBeInTheDocument();

    const textareaEl = screen.getByRole("bio");
    expect(textareaEl).toBeInTheDocument();

    //getByDiaplayValue Mtd
    const nameEl4 = screen.getByDisplayValue("Kashif");
    expect(nameEl4).toBeInTheDocument();

    ///getByLabelText Mtd:
    const textareaEl2 = screen.getByLabelText("Bio");
    expect(textareaEl2).toBeInTheDocument();

    const selectEl = screen.getByRole("combobox");
    expect(selectEl).toBeInTheDocument();

    const checkboxEl = screen.getByRole("checkbox");
    expect(checkboxEl).toBeInTheDocument();

    // Also work with wrap element with label
    const checkboxText = screen.getByLabelText(
      "I agree to your Terms & Conditions"
    );
    expect(checkboxText).toBeInTheDocument();

    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();
  });
});
