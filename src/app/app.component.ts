import { Component, ElementRef, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { CropperPosition, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('base64Result') base64Result!: ElementRef;
  title = 'ngx-image-cropper-demo';
  croppedImage!: string;
  croppedWidth!: number;
  croppedHeight!: number;
  imgPos!: CropperPosition;
  fileChangeEvent!: Event;
  maxWidth = 2083.25;
  maxHeight = 2083.25;
  minWidth = 1;
  minHeight = 1;
  showOriginalSize = false;
  croppedImgFormat: 'png'|'jpeg' = 'jpeg';

  onFileChange(ev: Event) {
    this.fileChangeEvent = ev;
    window.location.hash = '';
    this.showOriginalSize = false;
    this.croppedImage = null!;
  }

  onCropped(croppedEv: ImageCroppedEvent) {
    this.croppedImage = croppedEv.base64!; // non-null-assertion-operator
    this.croppedHeight = croppedEv.height;
    this.croppedWidth = croppedEv.width;
    this.imgPos = croppedEv.imagePosition;
  }

  download() {
    fetch(`${this.croppedImage}`)
      .then(res => res.blob())
      .then(blob => {
        saveAs(blob, `download.${this.croppedImgFormat === 'png' ? 'png' : 'jpg'}`);
      });
  }

  onClickPreview() {
    this.showOriginalSize = true;
    window.location.hash = '#preview-original-anchor';
  }

  onLoadImageFailed() {
    alert('Only png, gif and jpg are supported.');
  }

  selectElem() {
    if (this.base64Result) {
      this.base64Result.nativeElement.select();
    }
  }
}
