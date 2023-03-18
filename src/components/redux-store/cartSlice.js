import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAxiosWithTokenObj from "../Authorizationreq/AxiosReqWithToken";

// get cartdetails
export const getCart = createAsyncThunk("getCart", async (_, thunkApi) => {
  const data = await axios.get("/cart/getcart");
  if (data.data.message === "Success") {
    return data.data.payload;
  } else {
    return thunkApi.rejectWithValue(data.data);
  }
});

// adding to cart
export const addCart = createAsyncThunk(
  "addCart",
  async (formData, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.post("/cart/addcart", formData);
    console.log(data);
    if (data.data.message === "New Item Added") {
      return data.data.payload;
    } else {
      return thunkApi.rejectWithValue(data.data);
    }
  }
);

// deleting from cart
export const deleteCart = createAsyncThunk(
  "deleteCart",
  async ({ id, index }, thunkApi) => {
    let axiosRequestWithToken = getAxiosWithTokenObj();
    const data = await axiosRequestWithToken.delete(`/cart/deletecart/${id}`);
    console.log("data value", data);
    if (data.data.message === "Deleted") {
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

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    isSuccess: false,
    isLoading: false,
    invalidMessage: "",
  },
  reducers: {},

  extraReducers: {
    // getting from cart
    [getCart.pending]: reducerPending,
    [getCart.fulfilled]: (state, action) => {
      state.cart = action.payload;

      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [getCart.rejected]: reducerRejected,
    //adding to cart
    [addCart.pending]: reducerPending,
    [addCart.rejected]: reducerRejected,
    [addCart.fulfilled]: (state, action) => {
      let arr = JSON.parse(JSON.stringify(action.payload));
      state.cart.push(arr);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },

    //  delete cart
    [deleteCart.pending]: reducerPending,
    [deleteCart.fulfilled]: (state, action) => {
      state.cart.splice(action.payload.index, 1);
      state.isSuccess = true;
      state.isLoading = false;
      state.invalidMessage = "";
    },
    [deleteCart.rejected]: reducerRejected,
  },
});

export default cartSlice.reducer;
