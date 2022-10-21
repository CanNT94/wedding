import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./page/home/home.component";
import {LocationComponent} from "./page/location/location.component";
import {PhotoLibraryComponent} from "./page/photo-library/photo-library.component";
import {TimeComponent} from "./page/time/time.component"; // CLI imports router

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'images', component: PhotoLibraryComponent },
  { path: 'time', component: TimeComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
