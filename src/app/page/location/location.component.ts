import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {lat: 20.964623958230966, lng: 105.82886138441283},
    zoom: 17,
  };

  optionsGroom: google.maps.MapOptions = {
    center: {lat: 20.796947124649304, lng: 105.8875251176399},
    zoom: 17
  };
  constructor() {
  }

  ngOnInit(): void {
  }

}
