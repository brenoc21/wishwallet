import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
type Props = {
  children: React.ReactNode;
};
function AllTheProviders({ children }: Props) {
  return <div>{children}</div>;
}
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));
export default {
  getItem(key: any) {
    return localStorage.getItem(key);
  },
  setItem(key: any, value: any) {
    localStorage.setItem(key, value);
  }
};
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
