import { logRoles, render, screen } from "@testing-library/react";
import Find from "./Find";

describe("Test of Find", () => {
  test("1st test", async () => {
    render(<Find />);

    //for finding the role :

    // const view = render(<Find />);
    // logRoles(view.container);

    // debugging:
    // screen.debug();

    const buttonEl = await screen.findByRole(
      "button",
      { name: "logout" },
      { timeout: 3000 }
    );
    // screen.debug();
    expect(buttonEl).toBeInTheDocument();
  });
});
