import { User } from '@/interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user?: User;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: undefined,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.isAuthenticated = false;
      state.user = undefined;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
