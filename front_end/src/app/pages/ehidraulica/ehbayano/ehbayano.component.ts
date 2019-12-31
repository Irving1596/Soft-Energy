import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from 'googlemaps';

@Component({
  selector: 'app-ehbayano',
  templateUrl: './ehbayano.component.html',
  styleUrls: ['./ehbayano.component.scss']
})
export class EhbayanoComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  showInput = false;
  title = 'My first AGM project';
  lat = 9.176986;
  lng = -78.884693;
  ngOnInit() {
    /*
    setTimeout(() => {
      var mapProp = {
        center: new google.maps.LatLng(8.469443, -80.392695),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    
        this.showInput = true;
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
      }, 7000);
      */
  }
  ngAfterViewInit(){
    /*
    setTimeout(() => {
      var mapProp = {
        center: new google.maps.LatLng(8.469443, -80.392695),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
    
        this.showInput = true;
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  
      }, 7000);
      */
  }


  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
}
}


