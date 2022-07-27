import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
const initialState = {
  user: localStorage.getItem("user") ? localStorage.getItem("user") : null,
  isLoading: false,
  isError: false,
  message: "",
  isSuccess: false,
};
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (e) {
      //ERDM for mem
      const message =
        (e.response && e.response.data && e.response.data.message) ||
        e.message ||
        e.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (e) {
    const message =
      (e.response && e.response.data && e.response.data.message) ||
      e.message ||
      e.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      //   authService.logout();
    },
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user = null;
        state.message = action.payload;
        state.isSuccess = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const { reset, logout } = authSlice.actions;
export default authSlice.reducer;
