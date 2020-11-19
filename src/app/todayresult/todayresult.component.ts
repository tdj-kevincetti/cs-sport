import { Component, OnInit } from '@angular/core';
import {Football} from '../football'
import { FirebaseService } from '../firebase.service'
@Component({
  selector: 'app-todayresult',
  templateUrl: './todayresult.component.html',
  styleUrls: ['./todayresult.component.css']
})
export class TodayresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //รอเขียนกรองวันที่ เวลา
}