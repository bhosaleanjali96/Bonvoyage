import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import HotelForm from "../HotelForm";
import { store } from "../../redux-store/store";
import userEvent from "@testing-library/user-event";
// hotel name
test("renders hotel link", () => {
  render(
    <Provider store={store}>
      <HotelForm />
    </Provider>
  );
  const hotellinkElement = screen.getByPlaceholderText(/hotelname/i);
  expect(hotellinkElement).toBeInTheDocument();
});
// checking by role
test("renders hotel button ", () => {
  render(
    <Provider store={store}>
      <HotelForm />
    </Provider>
  );
  const btnElement = screen.getByRole("button");
  userEvent.click(btnElement);
  expect(btnElement).toBeVisible();
});
