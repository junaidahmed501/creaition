import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'creaition';

  public isWorking = false;
  public hasUploaded = false;

  public urls = new Array<string>();
  public outputImage = '';
  public outputImagesSample = [
    'assets/static/o1.png',
    'assets/static/o2.png',
    'assets/static/o3.png',
    'assets/static/other1.png',
    'assets/static/other2.png',
    'assets/static/other3.png',
  ];

  detectFiles(event: any) {
    this.urls = [];
    let files = event.target.files;
    if (files) {
      for (let file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          let imageURL = reader.result as string;
          this.urls.push(imageURL);
        }
        reader.readAsDataURL(file)
      }
    }
  }

  handleUpload() {
    this.isWorking = true;
    this.hasUploaded = true;
    this.isWorking = false;
    this.outputImage = this.generateRandomImage();
  }

  handleReset() {
    this.urls = [];
    this.hasUploaded = false;
  }

  handleRegenerate() {
    // todo: call this.handleUpload() again because we are not actually uploading anything for now
    this.handleUpload();
  }

  generateRandomImage() {
    const randomIndex = Math.floor(Math.random() * this.outputImagesSample.length);
    return this.outputImagesSample[randomIndex];
  }
}
