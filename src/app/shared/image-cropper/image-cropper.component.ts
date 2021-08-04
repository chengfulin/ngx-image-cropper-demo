import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss']
})
export class ImageCropperComponent implements OnInit {
  @Input() maxWidth = 1667;
  @Input() maxHeight = 1667;
  @Input() minWidth = 100;
  @Input() minHeight = 100;
  @Input() fileChangeEvent!: Event;
  @Input() outputFormat: 'png'|'jpeg' = 'png';
  @Output() cropped = new EventEmitter<ImageCroppedEvent>();
  @Output() loadFailed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onCropped(croppedEv: ImageCroppedEvent) {
    this.cropped.emit(croppedEv);
  }

  onLoadFailed() {
    this.loadFailed.emit();
  }
}
