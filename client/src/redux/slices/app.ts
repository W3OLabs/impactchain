import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  isAuthenticated : boolean;
  userInfo: any;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  userInfo: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthenticated: (state: GlobalState, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload;
    },
    setUserInfo : (state: GlobalState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
    }
  },
});

export const { setIsAuthenticated} = appSlice.actions;

export default appSlice.reducer;
