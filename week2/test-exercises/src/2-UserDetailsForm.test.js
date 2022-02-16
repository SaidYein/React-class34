import { render, screen, fireEvent } from "@testing-library/react";

import UserDetailsForm from "./2-UserDetailsForm";

/**
 * UserDetailsForm is a component that has some user interaction so is a little more complex.
 *
 * A nice way of thinking about what to test is to look at the steps the user can take when they interact with this component. So:
 * - Read the current information (check that this is correct based on the prop)
 * - Change a field (check that the changes are applied in the UI)
 * - Click on the Submit button (check that the fields are sent to the function)
 */

const testUser = {
  firstName: "John",
  lastName: "Doe",
  role: "Admin",
};
const changedUser = {
  firstName: "Mary",
  lastName: "Williams",
  role: "User",
};

describe("UserDetailsForm", () => {
  it("Correctly fills in the initial values", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Doe")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Admin")).toBeInTheDocument();
  });

  it("Correctly changes a fields value", () => {
    render(<UserDetailsForm initialUserValues={testUser} />);

    for (const key in changedUser) {
      const inputItem = screen.getByDisplayValue(testUser[key]);
      fireEvent.change(inputItem, {
        target: { value: changedUser[key] },
      });
      expect(screen.getByDisplayValue(changedUser[key])).toBeInTheDocument();
    }
  });

  it("Submits the right values to the onSubmit function", () => {
    const onSubmit = jest.fn();
    render(
      <UserDetailsForm initialUserValues={testUser} onSubmit={onSubmit} />
    );

    fireEvent.click(screen.getByText("Submit"));

    expect(onSubmit).toHaveBeenCalled();
  });
});
