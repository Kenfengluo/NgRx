import { User } from '../user';

export function reducer(state: UserState, action): UserState {
  switch (action.type) {

    case 'MASK_USER_NAME':
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
