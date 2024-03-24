import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserRecord } from "../../hooks/declarations/impact_chain_data/impact_chain_data.did";

export interface GlobalState {
  isAuthenticated: boolean;
  userInfo: any | null;
  storageInitiated: boolean,
  showDataForm: boolean;
  dataComponent: string;
  userRecord: UserRecord | null;
}

const initialState: GlobalState = {
  isAuthenticated: false,
  storageInitiated: false,
  userInfo: null,
  showDataForm: false,
  dataComponent: "Loading",
  userRecord: null,
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
    setDataComponent: (state: GlobalState, action: PayloadAction<any>) => {
      state.dataComponent = action.payload;
    },
    setUserRecord: (state: GlobalState, action: PayloadAction<UserRecord>) => {
      state.userRecord = action.payload;
    },
    setStorageInit : (state: GlobalState, action: PayloadAction<boolean>) => {
      state.storageInitiated = action.payload;
    },
    logout: (state: GlobalState) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const {
  setIsAuthenticated,
  setUserInfo,
  logout,
  setShowDataForm,
  setDataComponent,
  setUserRecord,
  setStorageInit
} = appSlice.actions;

export default appSlice.reducer;
