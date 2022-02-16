import { render, screen } from "@testing-library/react";
import Person from "../Person";

describe("Person", () => {
  it("renders nothing if the person is null", () => {
    render(<Person person={null} />);
    expect(
      screen.queryByText("Create random person info")
    ).not.toBeInTheDocument();
  });

  it("renders nothing if the person is undefined", () => {
    render(<Person />);
    expect(
      screen.queryByText("Create random person info")
    ).not.toBeInTheDocument();
  });

  it("renders elements if the person is not null", () => {
    const person = {
      first_name: "John",
      last_name: "Doe",
      email: "email@email.com",
    };
    render(<Person person={person} />);
    expect(screen.getByText("Full Name: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Email: email@email.com")).toBeInTheDocument();
  });

  it("renders -- if the email is missing", () => {
    const person = {
      first_name: "John",
      last_name: "Doe",
    };
    render(<Person person={person} />);
    expect(screen.getByText("Email: --")).toBeInTheDocument();
  });

  it("renders -- if the first name is missing", () => {
    const person = {
      last_name: "Doe",
      email: "email@email.com",
    };
    render(<Person person={person} />);
    expect(screen.getByText("Full Name: -- Doe")).toBeInTheDocument();
  });

  it("renders -- if the last name is missing", () => {
    const person = {
      first_name: "John",
      email: "email@email.com",
    };
    render(<Person person={person} />);
    expect(screen.getByText("Full Name: John --")).toBeInTheDocument();
  });
});
