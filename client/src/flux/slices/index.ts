import { combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './auth.slice';
import store from '../store';

export default combineReducers({
  auth: authReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export * from './auth.slice';
