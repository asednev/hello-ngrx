import { Action } from '@ngrx/store';

const CHANGE_STATE = 'CHANGE_STATE';
const PING = 'PING';

abstract class TypedAction implements Action {
  readonly type: string;

  constructor(type: string) {
    this.type = type;
  }
}

export class ChangeStatusAction extends TypedAction {
  constructor()  {
    super(CHANGE_STATE);
  }

  newState: string;
}

export class PingAction extends TypedAction {
  constructor() {
    super(PING);
  }

  timestamp: Date;
}

export function statusReducer(state = [], action: Actions) {

  switch (action.type) {

    case CHANGE_STATE:
      const changeStatusAction = <ChangeStatusAction> action;
      return {...state, state: changeStatusAction.newState };

    case PING:
      const pingAction = <PingAction>action;
      return {...state, lastPing: pingAction.timestamp};

    default:
      return state;
  }

}

export type Actions = ChangeStatusAction | PingAction;
