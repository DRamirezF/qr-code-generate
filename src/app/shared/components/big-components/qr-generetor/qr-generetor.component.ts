import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generetor',
  templateUrl: './qr-generetor.component.html',
  styleUrls: ['./qr-generetor.component.scss']
})
export class QrGeneretorComponent implements OnInit {
  show:string = 'url';

  changeItem(newItem: string) {
    this.show = newItem;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
