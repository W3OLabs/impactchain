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
    },
    logout : (state: GlobalState) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    }
  },
});

export const { setIsAuthenticated, setUserInfo, logout} = appSlice.actions;

export default appSlice.reducer;
