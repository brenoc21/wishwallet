import React from "react";
import { render, screen } from "./test-utils";
import App from "./App";
import userEvent from "@testing-library/user-event";
import AddToken from "./pages/AddToken";
// test("renders learn react link", () => {
//   const { getByText } = render(<EditToken/>);
//   const addButton = getByText("Add Token");
//   userEvent.click(addButton);
//   expect(getByText("Back")).toBeInTheDocument();
// });
describe("EditToken Component", () => {
  it("should add object to the array", () => {
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    //   useParams: () => ({
    //     id: 'company-id1',
    //   }),
    //   useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
    // }));

    const { getByTestId, getByText } = render(<AddToken />);
    const TokenNameInput = getByTestId("Token");
    userEvent.type(TokenNameInput, "klv");
    const TokenBalanceInput = getByTestId("Balance");
    userEvent.type(TokenBalanceInput, "1234,45");
    const saveButton = getByText("Save");
    userEvent.click(saveButton);

    expect(
      jest.spyOn(Object.getPrototypeOf(window.localStorage), "data")
    ).toContain(getByText("klv"));
  });
});
