import { Component } from '@angular/core';

import { Image } from './../Image';
import { ImageService } from './../services/image.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  url = environment.url;

  liked = true;

  images: Image[];
  constructor(private imgService: ImageService) {}

  ngOnInit() {
    this.imgService.getImages().subscribe(data => {
      console.log(data);
      this.images = data;
    })
  }

  giveLike = (image: Image) => {
    if (this.liked) {
      image.likes = image.likes+1;
      this.imgService.sendLike(image).subscribe(data => {
        console.log(data);
      });
    }
    
  }

}
