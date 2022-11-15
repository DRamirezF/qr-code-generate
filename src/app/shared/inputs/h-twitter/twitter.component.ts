import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  selection:string = 'Link to your profile';
  amount!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
