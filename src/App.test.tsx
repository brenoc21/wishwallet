import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
test("renders learn react link", () => {
  const { getByText } = render(<App></App>);
  const addButton = getByText("Add Token");
  userEvent.click(addButton);
  expect(getByText("Back")).toBeInTheDocument();
});
