import { Component, OnInit } from "@angular/core";
import { Football } from "../football";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  footballs: Football[];

  constructor(private boat: FirebaseService) {}

  ngOnInit() {
    console.log("Loadinng..,");
    this.boat.getFootball().subscribe(val => {
      this.footballs = val;
      console.log(val);
    });
  }
}
