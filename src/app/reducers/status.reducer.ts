import { Action } from '@ngrx/store';

export const CHANGE_STATE = 'CHANGE_STATE';
export const PING = 'PING';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface StatusPayload {
  state: string;
  timestamp: Date;
}

export function statusReducer(state = [], action: ActionWithPayload<StatusPayload>) {

  switch (action.type) {

    case CHANGE_STATE:
      return {...state, state:action.payload.state };

    case PING:
      return {...state, lastPing:action.payload.timestamp};

    default:
      return state;
  }

}
