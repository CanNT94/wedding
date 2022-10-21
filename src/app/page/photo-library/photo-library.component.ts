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
      src: 'assets/slide/D95_1364.JPG'
    },
    {
      name: '2',
      src: 'assets/slide/D95_1383.JPG'
    },
    {
      name: '3',
      src: 'assets/slide/D95_1386.JPG'
    },
    {
      name: '4',
      src: 'assets/slide/D95_1394.JPG'
    },
    {
      name: '5',
      src: 'assets/slide/D95_1425.JPG'
    },
    // {
    //   name: '6',
    //   src: 'assets/slide/D95_1456.JPG'
    // },
    {
      name: '7',
      src: 'assets/slide/D95_1464.JPG'
    },
    {
      name: '8',
      src: 'assets/slide/D95_1489.JPG'
    },
    {
      name: '9',
      src: 'assets/slide/D95_1526.JPG'
    },
    // {
    //   name: '10',
    //   src: 'assets/slide/D95_1533.JPG'
    // },
    {
      name: '11',
      src: 'assets/slide/D95_1543.JPG'
    },
    // {
    //   name: '12',
    //   src: 'assets/slide/D95_1591.JPG'
    // },
    {
      name: '13',
      src: 'assets/slide/D95_1625.JPG'
    },
    {
      name: '14',
      src: 'assets/slide/D95_1629.JPG'
    },{

      name: '15',
      src: 'assets/slide/D95_1662.JPG'
    },
    {
      name: '16',
      src: 'assets/slide/D95_1701.JPG'
    },
    // {
    //   name: '17',
    //   src: 'assets/slide/D95_1719.JPG'
    // },
    // {
    //   name: '18',
    //   src: 'assets/slide/D95_1723.JPG'
    // },
    // {
    //   name: '19',
    //   src: 'assets/slide/D95_1728.JPG'
    // },
    {
      name: '20',
      src: 'assets/slide/D95_1740.JPG'
    },
    {
      name: '21',
      src: 'assets/slide/D95_1781.JPG'
    },
    {
      name: '22',
      src: 'assets/slide/D95_1830.JPG'
    },
    // {
    //   name: '23',
    //   src: 'assets/slide/D95_1914.JPG'
    // },
    {
      name: '24',
      src: 'assets/slide/D95_1921.JPG'
    },
    {
      name: '25',
      src: 'assets/slide/D95_1973.JPG'
    },
    {
      name: '26',
      src: 'assets/slide/D95_2025.JPG'
    },
    // {
    //   name: '27',
    //   src: 'assets/slide/D95_2055.JPG'
    // },
    {
      name: '28',
      src: 'assets/slide/D95_2066.JPG'
    },
    {
      name: '29',
      src: 'assets/slide/D95_2069.JPG'
    },
    {
      name: '30',
      src: 'assets/slide/D95_2101.JPG'
    },
    // {
    //   name: '31',
    //   src: 'assets/slide/D95_2112.JPG'
    // },
    {
      name: '32',
      src: 'assets/slide/D95_2118.JPG'
    },
    // {
    //   name: '33',
    //   src: 'assets/slide/D95_2169.JPG'
    // },
    // {
    //   name: '34',
    //   src: 'assets/slide/D95_2176.JPG'
    // },
    {
      name: '35',
      src: 'assets/slide/D95_2204.JPG'
    },
    {
      name: '36',
      src: 'assets/slide/D95_2208.JPG'
    },
    {
      name: '37',
      src: 'assets/slide/D95_2223.JPG'
    },
    {
      name: '38',
      src: 'assets/slide/D95_2229.JPG'
    },
    // {
    //   name: '39',
    //   src: 'assets/slide/D95_2235.JPG'
    // },
    {
      name: '40',
      src: 'assets/slide/D95_2273.JPG'
    },
    // {
    //   name: '41',
    //   src: 'assets/slide/D95_2327.JPG'
    // },
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
