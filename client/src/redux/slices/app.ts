import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface GlobalState {
  isAuthenticated: boolean;
  userInfo: any | null;
  showDataForm: boolean;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  userInfo: null,
  showDataForm: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthenticated: (state: GlobalState, action: PayloadAction<any>) => {
      state.isAuthenticated = action.payload;
    },
    setUserInfo: (state: GlobalState, action: PayloadAction<any>) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    setShowDataForm: (state: GlobalState, action: PayloadAction<any>) => {
      state.showDataForm = action.payload;
    },
    logout: (state: GlobalState) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setIsAuthenticated, setUserInfo, logout, setShowDataForm } =
  appSlice.actions;

export default appSlice.reducer;
