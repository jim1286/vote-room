import { User } from "@/interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user?: User;
}

const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
