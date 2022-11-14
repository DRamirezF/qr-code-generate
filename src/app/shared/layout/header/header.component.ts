import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() show:string = '';
  @Output() sendItemName = new EventEmitter<string>();
  position:TooltipPosition = 'above';

  constructor() { }


  send(value: string) {
    this.show = value;
    console.log(this.show)
    this.sendItemName.emit(value);
  }

}
