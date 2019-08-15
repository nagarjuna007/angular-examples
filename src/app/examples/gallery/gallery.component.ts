import { Component, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        medium: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        big: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg'
      },
      {
        small: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        medium: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        big: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg'
      },
      {
        small: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        medium: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg',
        big: 'https://geospatialmedia.s3.amazonaws.com/wp-content/uploads/2016/07/Cover-Story-BIM.jpg'
      }
    ];
  }
}
