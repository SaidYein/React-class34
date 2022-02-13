import { render, screen } from "@testing-library/react";
import PersonController from "../PersonController";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://www.randomuser.me/api?results=1", (req, res, ctx) => {
    const person = [
      {
        first_name: "John",
        last_name: "Doe",
        email: "email@email.com",
      },
    ];
    return res(ctx.json(person));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("renders correctly if fetch returns an json object", async () => {
  render(<PersonController />);
  await screen.findByText("Full Name: John Doe");
  await screen.findByText("Email: email@email.com");
});

it("handles server error", async () => {
  server.use(
    rest.get("https://www.randomuser.me/api?results=1", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<PersonController />);
  await screen.findByText("Fetching Data Failed");
});
