import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl(''),
    msg: new FormControl('')
  })

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBoard(){
    this.firebaseService.addBoard(
      this.form.value.name,
      this.form.value.msg
    )
    this.router.navigate(['/'])
  }
}