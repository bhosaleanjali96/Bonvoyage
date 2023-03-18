import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAxiosWithTokenObj from "../Authorizationreq/AxiosReqWithToken";

// get holiday
export const getHoliday = createAsyncThunk(
  "getHoliday",
  async (_, thunkApi) => {
    const data = await axios.get("/holiday/getholiday");
    if (data.data.message === "Success") {
      return data.data.payload;
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// add holiday
export const addHoliday = createAsyncThunk(
  "addHoliday",
  async (formData, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.post(
      "/holiday/addholiday",
      formData
    );

    if (data.data.message === "New Holiday Added") {
      return data.data.payload;
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// edit holiday
export const editHoliday = createAsyncThunk(
  "editHoliday",
  async ({ holId, formData, index }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.put(
      `/holiday/editholiday/${holId}`,
      formData
    );
    if (data.data.message === "Holiday Updated") {
      return thunkApi.fulfillWithValue({ index, payload: data.data.payload });
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// delete Holiday
export const deleteHoliday = createAsyncThunk(
  "deleteHoliday",
  async ({ holId, index }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.delete(
      `holiday/deleteholiday/${holId}`
    );
    if (data.data.message === "Holiday deleted") {
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

const holidaySlice = createSlice({
  name: "Holidaypackage",
  initialState: {
    holidaypackage: [],
    isSuccess: false,
    isLoading: false,
    invalidMessage: "",
  },
  reducers: {},
  extraReducers: {
    // get holiday
    [getHoliday.pending]: reducerPending,
    [getHoliday.fulfilled]: (state, action) => {
      state.holidaypackage = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [getHoliday.rejected]: reducerRejected,

    // add holiday from admindashboard
    [addHoliday.pending]: reducerPending,
    [addHoliday.fulfilled]: (state, action) => {
      state.holidaypackage.push(action.payload);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [addHoliday.rejected]: reducerRejected,

    // Editing holiday
    [editHoliday.pending]: reducerPending,
    [editHoliday.fulfilled]: (state, action) => {
      state.holidaypackage.splice(
        action.payload.index,
        1,
        action.payload.payload
      );
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [editHoliday.rejected]: reducerRejected,

    // delete holiday
    [deleteHoliday.pending]: reducerPending,
    [deleteHoliday.fulfilled]: (state, action) => {
      state.holidaypackage.splice(action.payload.index, 1);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [deleteHoliday.rejected]: reducerRejected,
  },
});

export default holidaySlice.reducer;
