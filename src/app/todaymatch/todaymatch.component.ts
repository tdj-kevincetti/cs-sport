import { Component, OnInit } from '@angular/core';
import {Football} from '../football'
import { FirebaseService } from '../firebase.service'
import {Input} from '@angular/core'
@Component({
  selector: 'app-todaymatch',
  templateUrl: './todaymatch.component.html',
  styleUrls: ['./todaymatch.component.css']
})
export class TodaymatchComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  @Input() football:Football;
  ngOnInit() {
    this.football = {
    ...this.football,
    date:this.football.date}
  }
}