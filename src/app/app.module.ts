import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { statusReducer } from './reducers/status.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ statusReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
