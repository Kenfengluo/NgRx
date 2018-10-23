import { User } from '../user';

const initialState: UserState = {
  maskUserName: false,
  currentUser: null
};

export function reducer(state = initialState, action): UserState {
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
