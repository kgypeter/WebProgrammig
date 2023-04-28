import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyDjNqu2yeiaj45drkylAUA_oJxgWxQjqKM",
    authDomain: "authentication-project-84230.firebaseapp.com",
    projectId: "authentication-project-84230",
    storageBucket: "authentication-project-84230.appspot.com",
    messagingSenderId: "505496525925",
    appId: "1:505496525925:web:cea596de2050398a9c7a8c"
    }),
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
