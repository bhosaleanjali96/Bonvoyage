import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Holidays from "../Holiday/Holidays";
import { store } from "../redux-store/store";
import userEvent from "@testing-library/user-event";
// hotel name
test("renders holidays link", () => {
  render(
    <Provider store={store}>
      <Holidays />
    </Provider>
  );
  const holidayslinkElement = screen.getByText(
    /Book Domestic and International Holidays/i
  );
  expect(holidayslinkElement).toBeInTheDocument();
});
// checking by role
test("renders holiday search button ", () => {
  render(
    <Provider store={store}>
      <Holidays />
    </Provider>
  );
  const btnElement = screen.getByRole("button", { name: "Search Packages" });
  userEvent.click(btnElement);
  expect(btnElement).toBeVisible();
});
