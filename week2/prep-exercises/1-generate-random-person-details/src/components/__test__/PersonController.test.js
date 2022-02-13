import { render, screen, waitFor } from "@testing-library/react";
import PersonController from "../PersonController";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
    const users = {
      results: [
        {
          name: {
            first: "John",
            last: "Doe",
          },
          email: "email@email.com",
        },
      ],
    };

    return res(ctx.json(users));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("renders correctly if fetch is successful", async () => {
  render(<PersonController />);
  // await waitFor(() => screen.findByRole("div"));

  // expect(screen.getByRole("div")).toHaveTextContent("Full Name: John Doe");

  // const nameElement = screen.queryByText("Full Name: John Doe");
  // expect(nameElement).toBeInTheDocument();

  await screen.findByText("Full Name: John Doe");
  await screen.findByText("Email: email@email.com");

  // const nameElement = await screen.findByTestId("person-item-Doe");
  // expect(nameElement).toBeInTheDocument();
});

it("error displayed when fetch fails", async () => {
  server.use(
    rest.get("https://www.randomuser.me/api", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<PersonController />);
  await screen.findByText("Fetching Data Failed");
});
