import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { saveAs } from 'file-saver';
import { CropperPosition, ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  @ViewChild('croppedImgElem') croppedImgElem!: ElementRef;
  @Input() maxWidth = 1667;
  @Input() maxHeight = 1667;
  @Input() minWidth = 100;
  @Input() minHeight = 100;
  croppedImage!: string;
  fileChangeEvent!: Event;
  croppedWidth!: number;
  croppedHeight!: number;
  imgPos!: CropperPosition;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(ev: Event) {
    this.fileChangeEvent = ev;
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
        saveAs(blob, 'download.png');
      });
  }
}
