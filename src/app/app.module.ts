import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

export const firebaseConfig={
    apiKey: "AIzaSyAG9Y3dq8yNCSF577YRfJKLwO9rrkiDO2E",
    authDomain: "papper-4d3b5.firebaseapp.com",
    databaseURL: "https://papper-4d3b5.firebaseio.com",
    projectId: "papper-4d3b5",
    storageBucket: "papper-4d3b5.appspot.com",
    messagingSenderId: "955954416759"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig,'papper-4d3b5')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
