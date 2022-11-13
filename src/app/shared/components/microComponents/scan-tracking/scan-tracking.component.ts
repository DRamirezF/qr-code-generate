import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-tracking',
  template: `
  <div class="scan">
    <div class="scan__icon"></div>
    <span class="scan__text">Scan tracking</span>
  </div>
  `,
  styleUrls: ['./scan-tracking.component.scss']
})
export class ScanTrackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
