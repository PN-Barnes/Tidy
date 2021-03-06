import { useReducer } from 'react';
import {
  UPDATE_TASKS,
  ADD_TASK,
  UPDATE_CONTACTS,
  ADD_CONTACTS,
  UPDATE_CURRENT_USER,
  UPDATE_EVENTS,
  UPDATE_MESSAGES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_ACCOUNT_STATUS,
  UPDATE_ACCOUNT_NAME,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TASKS:
      return {
        ...state,
        tasks_current_user: [...action.tasks_current_user],
      };
    case ADD_TASK:
      return {
        ...state,
        tasks_current_user: [
          ...state.tasks_current_user,
          action.tasks_current_user,
        ],
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts_current_user: [
          ...state.contacts_current_user,
          action.contacts_current_user,
        ],
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts_current_user: [...action.contacts_current_user],
      };
    case UPDATE_CURRENT_USER:
      return {
        ...state,
        current_user: action.current_user
      }
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
