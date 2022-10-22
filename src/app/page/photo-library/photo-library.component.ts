import {Component, OnInit} from '@angular/core';
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
  images = [
    {
      name: '1',
      src: 'assets/slide/1.jpg'
    },
    {
      name: '2',
      src: 'assets/slide/2.jpg'
    },
    {
      name: '3',
      src: 'assets/slide/3.jpg'
    },
    {
      name: '4',
      src: 'assets/slide/4.jpg'
    },
    {
      name: '5',
      src: 'assets/slide/5.jpg'
    },
    {
      name: '6',
      src: 'assets/slide/6.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
