import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../firebase.service'
import {Input} from '@angular/core'
import {Football} from '../football'
@Component({
  selector: 'app-upcomingtable',
  templateUrl: './upcomingtable.component.html',
  styleUrls: ['./upcomingtable.component.css']
})
export class UpcomingtableComponent implements OnInit {
  footballs: Football[];
  constructor(private boat: FirebaseService) { }
  @Input() football:Football;
  i:number
  min:string;hr:string
  ngOnInit() {
    console.log("Loadinng..,");
    this.boat.getMatch().subscribe(val => {
      this.footballs = val;
      for (this.i=0;this.i<this.footballs.length;this.i++){
        this.footballs[this.i].date = this.convert2time(this.footballs[this.i].date.toDate())
      }
      console.log(this.footballs);
    });

  }
  convert2time(val:Date){
    this.min = val.getMinutes().toString()
    this.hr = val.getHours().toString()
    if (this.min.length==1) this.min = "0"+this.min
    if (this.hr.length==1) this.hr = "0"+this.hr
    return this.hr+":"+this.min
  }

}