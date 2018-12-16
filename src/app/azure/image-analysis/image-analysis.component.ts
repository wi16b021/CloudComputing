import { Component, OnInit } from '@angular/core';
import { VisionApiService } from '../vision-api.service';

@Component({
  selector: 'app-image-analysis',
  templateUrl: './image-analysis.component.html',
  styleUrls: ['./image-analysis.component.scss']
})
export class ImageAnalysisComponent implements OnInit {

  fileToUpload: File = null;
  result: any;

  constructor(
    private visionApiService: VisionApiService
  ) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    if (this.fileToUpload) {
      this.visionApiService.analyze(this.fileToUpload).subscribe(data => {
        this.result = data;
      }, error => {
        console.log(error);
      });
    }
  }

}
