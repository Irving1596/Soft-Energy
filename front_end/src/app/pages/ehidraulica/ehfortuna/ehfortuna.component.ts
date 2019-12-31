import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-ehfortuna',
  templateUrl: './ehfortuna.component.html',
  styleUrls: ['./ehfortuna.component.scss']
})
export class EhfortunaComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  showInput = false;
  title = 'My first AGM project';
  lat =  8.745176;
  lng = -82.249163;
  ngOnInit() {

  }
  ngAfterViewInit(){

  }


  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
}

}
