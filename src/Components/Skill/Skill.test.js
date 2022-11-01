import { render, screen } from "@testing-library/react";
import Skill from "./Skill";
import { lang } from "./Skill";

describe("Skills Test", () => {
  test("list of skills", () => {
    render(<Skill />);
    const listUl = screen.getByRole("list");
    expect(listUl).toBeInTheDocument();
  });

  test("list names", () => {
    render(<Skill />);
    const listNameLi = screen.getAllByRole("listitem");
    expect(listNameLi).toHaveLength(lang.length);
  });

  test("render login btn", () => {
    render(<Skill />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("Start Leaning Btn not rnder", () => {
    render(<Skill />);
    const LearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(LearningBtn).not.toBeInTheDocument();
  });
});
