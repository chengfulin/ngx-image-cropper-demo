import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule as NgxImageCropperModule } from 'ngx-image-cropper';
import { ImageCropperComponent } from './image-cropper.component';



@NgModule({
  declarations: [
    ImageCropperComponent
  ],
  imports: [
    CommonModule,
    NgxImageCropperModule,
  ],
  exports: [
    ImageCropperComponent,
  ]
})
export class ImageCropperModule { }
