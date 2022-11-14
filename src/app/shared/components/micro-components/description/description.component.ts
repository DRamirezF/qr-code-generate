import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
  <p class="description">{{description}}</p>
  `,
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  @Input() description!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
