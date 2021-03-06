import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActions, UserActionTypes } from './user.action';

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
};

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
  getUserFeatureState,
  state => state.maskUserName
);

export const getCurrentUser = createSelector(
  getUserFeatureState,
  state => state.currentUser
);


export function reducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.MaskUserName:
    // console.log('existing state: ' + JSON.stringify(state));
    // console.log('payload: ' + action.payload);
      return {
        ...state,
        maskUserName: action.payload
    };
    default:
      return state;
  }
}

export interface UserState {
  maskUserName: boolean;
  currentUser: User;
}
