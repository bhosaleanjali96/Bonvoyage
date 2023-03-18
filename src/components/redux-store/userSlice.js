import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAxiosWithTokenObj from "../Authorizationreq/AxiosReqWithToken";
import { encrypt } from "../Authorizationreq/encryptiondecription";
export const userLogin = createAsyncThunk(
  "loginuser",
  async (userCredientialObj, thunkAPI) => {
    let encryptedData = encrypt(userCredientialObj);
    let data;
    // make post request
    if (userCredientialObj.type === "User") {
      let response = await axios.post("/users/login", {
        usercredential: encryptedData,
      });
      data = response.data;
    }
    if (userCredientialObj.type === "HotelOwner") {
      let response = await axios.post("/hotelowner/login", {
        usercredential: encryptedData,
      });
      console.log(response);
      data = response.data;
    }
    if (userCredientialObj.type === "Admin") {
      let response = await axios.post("/admin/login", {
        usercredential: encryptedData,
      });
      console.log(response);
      data = response.data;
    }

    if (data.message === "Success") {
      // save it in localstorage
      localStorage.setItem("token", data.token);
      if (userCredientialObj.type === "HotelOwner") {
        let userDetails = {
          username: data.user.ownername,
          profileimage:
            "https://res.cloudinary.com/dtoun3oji/image/upload/v1631706146/samples/bon-voyage-260nw-707749495_pjmtdo.webp",
          type: userCredientialObj.type,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
      } else if (
        userCredientialObj.type === "Admin" ||
        userCredientialObj.type === "User"
      ) {
        let userDetails = {
          username: data.user.name,
          profileimage: data.user.profileimage,
          type: userCredientialObj.type,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
      }
      return data.user;
    }
    if (
      data.message === "Invalid username" ||
      data.message === "Invalid Password"
    ) {
      // it will provide data to rejected state
      return thunkAPI.rejectWithValue(data);
    }
  }
);

// edit profileimg
export const editProfileimg = createAsyncThunk(
  "editProfileimg",
  async ({ imgID, formData }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.put(
      `/users/editprofilepic/${imgID}`,
      formData
    );
    if (data.data.message === "Success") {
      return thunkApi.fulfillWithValue({ payload: data.data.payload });
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// edit profileInfo
export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ EditID, formData }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.put(
      `/users/editprofile/${EditID}`,
      formData
    );
    if (data.data.message === "Success") {
      return thunkApi.fulfillWithValue({ payload: data.data.payload });
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

const reducerPending = (state) => {
  return (state = { ...state, isLoading: true, invalidLoginMessage: "" });
};

const reducerRejected = (state, action) => {
  return (state = {
    ...state,
    isLoading: false,
    invalidLoginMessage: action.payload.message,
  });
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: {},
    isSuccess: false,
    isLoading: false,
    isError: false,
    invalidLoginMessage: "",
  },
  reducers: {
    clearLoginStatus: (state) => {
      state.isSuccess = false;
      return state;
    },
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      state.userObj = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidLoginMessage = "";
      state.isError = false;
    },
    [userLogin.pending]: reducerPending,
    [userLogin.rejected]: reducerRejected,
    //edit profilepic
    [editProfileimg.fulfilled]: (state, action) => {
      state.userObj.profileimage = action.payload.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidLoginMessage = "";
      state.isError = false;
    },
    [editProfileimg.pending]: reducerPending,
    [editProfileimg.rejected]: reducerRejected,

    //edit profileInfo
    [editProfile.fulfilled]: (state, action) => {
      state.userObj.email = action.payload.payload.email;
      state.userObj.mobilenumber = action.payload.payload.mobilenumber;
      state.userObj.address = action.payload.payload.address;
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidLoginMessage = "";
      state.isError = false;
    },
    [editProfile.pending]: reducerPending,
    [editProfile.rejected]: reducerRejected,
  },
});

export const { clearLoginStatus } = userSlice.actions;
export default userSlice.reducer;
