import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  template: `
  <div class="upload">
    <i class="upload__icon"></i>
    <span class="upload__textBlue">Upload any file</span>
    <span class="upload__textGray">(.jpg, .pdf, .mp3, .docx, .pptx)</span>
  </div>
  `,
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
