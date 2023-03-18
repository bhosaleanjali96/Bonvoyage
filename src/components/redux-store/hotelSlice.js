import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAxiosWithTokenObj from "../Authorizationreq/AxiosReqWithToken";

// get hotels
export const getHotels = createAsyncThunk("getHotels", async (_, thunkApi) => {
  const data = await axios.get("/hotel/gethotel");
  if (data.data.message === "Success") {
    return data.data.payload;
  } else {
    return thunkApi.rejectWithValue(data.data);
  }
});

// add hotels
export const addHotels = createAsyncThunk(
  "addHotels",
  async (formData, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.post("/hotel/addhotel", formData);
    if (data.data.message === "New Hotel Added") {
      return data.data.payload;
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// edit hotels
export const editHotels = createAsyncThunk(
  "editHotels",
  async ({ hid, formData, index }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.put(
      `/hotel/edithotel/${hid}`,
      formData
    );
    if (data.data.message === "Hotel updated") {
      return thunkApi.fulfillWithValue({ index, payload: data.data.payload });
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// delete Hotels
export const deleteHotels = createAsyncThunk(
  "deleteHotels",
  async ({ hid, index }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.delete(
      `/hotel/deletehotel/${hid}`
    );
    console.log("data value", data);
    if (data.data.message === "Hotel deleted") {
      return thunkApi.fulfillWithValue({ index });
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

const reducerPending = (state) => {
  return (state = { ...state, isLoading: true, invalidMessage: "" });
};

const reducerRejected = (state, action) => {
  return (state = {
    ...state,
    isLoading: false,
    invalidMessage: action.payload.message,
  });
};

const hotelSlice = createSlice({
  name: "Hotels",
  initialState: {
    hotels: [],
    isSuccess: false,
    isLoading: false,
    invalidMessage: "",
  },
  reducers: {},
  extraReducers: {
    [getHotels.pending]: reducerPending,
    [getHotels.fulfilled]: (state, action) => {
      state.hotels = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [getHotels.rejected]: reducerRejected,
    // Adding Hotel
    [addHotels.pending]: reducerPending,
    [addHotels.fulfilled]: (state, action) => {
      state.hotels.push(action.payload);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidLoginMessage = "";
    },
    [addHotels.rejected]: reducerRejected,

    // Editing Hotel
    [editHotels.pending]: reducerPending,
    [editHotels.fulfilled]: (state, action) => {
      state.hotels.splice(action.payload.index, 1, action.payload.payload);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [editHotels.rejected]: reducerRejected,

    // Delete Hotels
    [deleteHotels.pending]: reducerPending,

    [deleteHotels.fulfilled]: (state, action) => {
      state.hotels.splice(action.payload.index, 1);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidLoginMessage = "";
      state.isError = false;
    },
    [deleteHotels.rejected]: reducerRejected,
  },
});

export default hotelSlice.reducer;
