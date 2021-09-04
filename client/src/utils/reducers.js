import { useReducer } from 'react';
import { UPDATE_ACCOUNT_STATUS, UPDATE_ACCOUNT_NAME } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ACCOUNT_STATUS:
      console.log('UPDATE_ACCOUNT_STATUS dispatched');
      return {
        ...state,
        isLoggedIn: !action.isLoggedIn,
      };
    case UPDATE_ACCOUNT_NAME:
      console.log('UPDATE_ACCOUNT_NAME dispatched');
      return {
        ...state,
        userName: action.userName,
      };
    default:
      return state;
  }
};

export function useAccountReducer(initialState) {
  return useReducer(reducer, initialState);
}
