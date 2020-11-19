import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Board } from '../board';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.css']
})
export class DisplayCommentComponent implements OnInit {

  constructor(
    private firebaseService:FirebaseService
  ) { }

  @Input() board: Board;

  ngOnInit() {
    this.board = {
      ...this.board,
      date: this.timeAgo(this.board.date.toDate()) 
    }
  }

  timeAgo(val: Date){
    const now = new Date();
    const diff = Math.abs(now.getTime()- val.getTime());
    const diffDay = Math.ceil(diff / (1000 * 3600 * 24));
    const diffHour = Math.ceil(diff / (1000 * 3600));
    const diffMinute = Math.ceil(diff / (1000 * 60));
    const diffSecond = Math.ceil(diff / 1000);

    if(diffSecond < 60){
      return "Just now.";
    }

    if(diffMinute < 60){
      return `${diffMinute} minute(s) ago.`;
    }

    if(diffHour < 24){
      return `${diffHour} hour(s) ago.`;
    }

    return `${diffDay} day(s) ago.`;
  }

  del(){
    if(window.confirm("confirm")){
      this.firebaseService
        .deleteBoard(this.board.id)
        .then(() => {
          alert("deleteComplete");
        })
        .catch(err => {
          alert("deleteFailure");
        });
    }
  }
}