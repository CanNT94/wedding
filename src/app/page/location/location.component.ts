import { Component, OnInit } from '@angular/core';
import {catchError, map, Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  apiLoaded: Observable<boolean>;
  options: google.maps.MapOptions = {
    center: {lat: 20.964623958230966, lng: 105.82886138441283},
    zoom: 18
  };

  apiLoadedGroom: Observable<boolean>;
  optionsGroom: google.maps.MapOptions = {
    center: {lat: 20.7969722, lng: 105.8869806},
    zoom: 18
  };
  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAwFnSt3lAmOHQL8FZ2Tw4byoTEv4Gt15s&libraries=places&sensor=false', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );

    this.apiLoadedGroom = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyAwFnSt3lAmOHQL8FZ2Tw4byoTEv4Gt15s&libraries=places&sensor=false', 'callback')
      .pipe(
        map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
  }

}
