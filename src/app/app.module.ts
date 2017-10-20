import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { StoreModule } from '@ngrx/store';
import { statusReducer } from './reducers/status.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ statusReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
