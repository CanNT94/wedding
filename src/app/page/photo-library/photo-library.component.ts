import {Component, OnInit} from '@angular/core';
import { images } from 'src/app/app-constant';
// import Swiper core and required modules
import SwiperCore, {Autoplay, FreeMode, Navigation, Pagination, Thumbs, Zoom} from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay, Pagination, Zoom]);
@Component({
  selector: 'app-photo-library',
  templateUrl: './photo-library.component.html',
  styleUrls: ['./photo-library.component.css']
})
export class PhotoLibraryComponent implements OnInit {
  thumbsSwiper: any;
  images = images;
  constructor() { }

  ngOnInit(): void {

  }

}
