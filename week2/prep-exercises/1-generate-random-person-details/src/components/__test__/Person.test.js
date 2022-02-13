import { render, screen } from "@testing-library/react";
import Person from "../Person";

it("renders nothing if the person is null", () => {
  render(<Person person={null} />);
  const buttonElement = screen.queryByText("Create random person info");
  expect(buttonElement).not.toBeInTheDocument();
});

it("renders elements if the person is not null", () => {
  const person = {
    first_name: "John",
    last_name: "Doe",
    email: "email@email.com",
  };
  render(<Person person={person} />);
  const nameElement = screen.getByText("Full Name: John Doe");
  const emailElement = screen.getByText("Email: email@email.com");
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});

it("renders -- if the email is missing", () => {
  const person = {
    first_name: "John",
    last_name: "Doe",
  };
  render(<Person person={person} />);
  const nameElement = screen.getByText("Full Name: John Doe");
  const emailElement = screen.getByText("Email: --");
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});

it("renders -- if the first name is missing", () => {
  const person = {
    last_name: "Doe",
    email: "email@email.com",
  };
  render(<Person person={person} />);
  const nameElement = screen.getByText("Full Name: -- Doe");
  const emailElement = screen.getByText("Email: email@email.com");
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});

it("renders -- if the last name is missing", () => {
  const person = {
    first_name: "John",
    email: "email@email.com",
  };
  render(<Person person={person} />);
  const nameElement = screen.getByText("Full Name: John --");
  const emailElement = screen.getByText("Email: email@email.com");
  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
});
