import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  template: `
  <h2 class="subtitle">{{subtitle}}</h2>
  `,
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {
  @Input() subtitle!:string;
  constructor() { }

  ngOnInit(): void {
  }

}
