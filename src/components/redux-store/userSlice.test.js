import reducer, { clearLoginStatus } from "./userSlice";

it("should return the initial state", () => {
  expect(
    reducer(
      {
        userObj: {},
        isSuccess: false,
        isLoading: false,
        isError: false,
        invalidLoginMessage: "",
      },
      {}
    )
  ).toEqual({
    userObj: {},
    isSuccess: false,
    isLoading: false,
    isError: false,
    invalidLoginMessage: "",
  });
});

it("should reset the user", () => {
  expect(
    reducer(
      {
        userObj: { type: "tets", name: "testUser", password: "testpassword" },
        isSuccess: true,
        isLoading: false,
        invalidLoginMessage: "",
      },
      clearLoginStatus()
    )
  ).toEqual({
    userObj: { type: "tets", name: "testUser", password: "testpassword" },
    isSuccess: false,
    isLoading: false,
    invalidLoginMessage: "",
  });
});
