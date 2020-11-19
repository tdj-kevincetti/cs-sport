import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './firebase.service';
import { NextmatchComponent } from './nextmatch/nextmatch.component';
import { TodayresultComponent } from './todayresult/todayresult.component';

import { ResultComponent } from './result/result.component';
import { TableComponent } from './table/table.component';
import { TodaymatchComponent } from './todaymatch/todaymatch.component';

import { UpcomingtableComponent } from './upcomingtable/upcomingtable.component';
import { LiveboardComponent } from './liveboard/liveboard.component';
import { CommentComponent } from './comment/comment.component';

import {AngularFireModule} from '@angular/fire';
import{ environment} from "./environment";

import { DisplayCommentComponent } from './display-comment/display-comment.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot([
    {path: "",component:TodayresultComponent},
    {path: "nextmatch",component:NextmatchComponent},
    {path: "todaymatch",component:TodaymatchComponent},
    {path: "liveboard",component:LiveboardComponent},
    {path: "comment",component:CommentComponent},
    {path: "liveboard",component:LiveboardComponent}
    ]),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    NextmatchComponent,
    TodayresultComponent,
    ResultComponent,
    TableComponent,
    TodaymatchComponent,
    UpcomingtableComponent,
    LiveboardComponent,
    CommentComponent,
    DisplayCommentComponent,
     ],
  bootstrap:  [ 
    AppComponent ],

  providers: [
    FirebaseService]
})
export class AppModule { }
