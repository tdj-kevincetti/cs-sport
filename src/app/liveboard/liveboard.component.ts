import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import  {Board } from '../board';

@Component({
  selector: 'app-liveboard',
  templateUrl: './liveboard.component.html',
  styleUrls: ['./liveboard.component.css']
})
export class LiveboardComponent implements OnInit {
  boards: Board[];

  constructor(private firebaseservice:
  FirebaseService) { }

  ngOnInit() {
    this.firebaseservice.getBoard().subscribe(val => {
      this.boards = val;
    });
  }

}