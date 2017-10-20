import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { ChangeStatusAction, PingAction } from '../reducers/status.reducer';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status$: Observable<any>;

  constructor(private store: Store<any>) {
    this.status$ = this.store.select('statusReducer');
  }

  ngOnInit() {
  }

  setState(newState) {
    const action = new ChangeStatusAction();
    action.newState = newState;
    this.store.dispatch(action);
  }

  sendPing() {
    const action = new PingAction();
    action.timestamp = new Date();
    this.store.dispatch(action);
  }
}
