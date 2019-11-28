import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})


export class LocationsPage implements OnInit {

  lat: number = -22.346886;
  lng: number = -49.031153;
  zoom: number = 15;

  markers: any[];


  constructor(private dataS : DatabaseService) {

    this.markers = this.dataS.markers;
  }

  ngOnInit() {

  }

  placeMaker(lat: number,lng:number) {


  }



}
