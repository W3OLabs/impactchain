import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  isAuthenticated : boolean;
  userInfo: any| null;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  userInfo: null,
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
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    }
  },
});

export const { setIsAuthenticated, setUserInfo} = appSlice.actions;

export default appSlice.reducer;
