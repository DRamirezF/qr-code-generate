import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-sing-up',
  template: `
  <button class="button">
    Sing up for free
    <a class="button__icon"></a>
  </button>
  `,
  styleUrls: ['./button-sing-up.component.scss']
})
export class ButtonSingUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
