import { Injectable } from '@angular/core';
import { AngularFirestore } from"@angular/fire/firestore";
import * as firebase from "firebase/app";
import { Board } from './board';
import { Football } from "./football";


@Injectable(
  {providedIn: "root"}
)
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  getFootball(){
    let DocRef = this.firestore.collection<Football>("todayresult",e=>e.orderBy('date','asc'));
    return DocRef.valueChanges();
  }
  getMatch(){
    let DocRef = this.firestore.collection<Football>("todaymatch",e=>e.orderBy('date','asc'));
    return DocRef.valueChanges();
  }
  
  getBoard(){
    let DocRef = this.firestore.collection<Board>("comment", e=> e.orderBy("date","asc"))
    return DocRef.valueChanges();
  }
  
  addBoard(n: string, message: string){
    let board = { 
      name: n,
      msg: message,
      date: firebase.default.firestore.Timestamp.now()
    };
    const ref = this.firestore.collection("comment").add(board);
    ref.then( newRef => {
      const upDateID = {
        id: newRef.id
      };
      newRef.update(upDateID);
    });
    return ref;
  }

  deleteBoard(id: string){
    return this.firestore.collection("comment").doc(id).delete();
  }


}