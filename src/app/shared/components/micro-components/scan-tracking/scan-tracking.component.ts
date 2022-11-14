import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scan-tracking',
  template: `
  <mat-slide-toggle class="scan">Scan tracking</mat-slide-toggle>
  `,
  styleUrls: ['./scan-tracking.component.scss']
})
export class ScanTrackingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
