import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-generate-qr',
  template: `
  <button class="button">
    <a class="button__icon"></a>
    Primary
  </button>
  `,
  styleUrls: ['./button-generate-qr.component.scss']
})
export class ButtonGenerateQrComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
