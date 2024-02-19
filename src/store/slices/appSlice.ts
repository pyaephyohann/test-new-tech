import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  datas: string;
  error: null | string;
  isLoading: boolean;
}

const initialState: UserState = {
  datas: "",
  error: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setDatas: (state, action) => {
      state.datas = action.payload;
    },
  },
});

export const { setDatas } = userSlice.actions;

export default userSlice.reducer;
