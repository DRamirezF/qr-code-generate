import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss']
})
export class WifiComponent implements OnInit {
  position:TooltipPosition = 'above';
  constructor() { }

  ngOnInit(): void {
  }

}
