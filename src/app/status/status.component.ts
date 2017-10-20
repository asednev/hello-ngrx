import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CHANGE_STATE, PING } from '../reducers/status.reducer';

@Component({
  selector: 'status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status$: Observable<any>;

  constructor(private store: Store<any>
  ) {

    console.log('statusReducer', this.store.select('statusReducer'));

    this.status$ = this.store.select('statusReducer');
  }

  ngOnInit() {
  }

  setState(state) {
    this.store.dispatch({type: CHANGE_STATE, payload: { state} });
  }

  sendPing() {
    this.store.dispatch({type: PING, payload: {timestamp: new Date()}});
  }
}
