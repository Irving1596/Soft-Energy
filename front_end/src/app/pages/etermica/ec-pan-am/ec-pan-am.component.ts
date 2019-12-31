import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from 'googlemaps';
@Component({
  selector: 'app-ec-pan-am',
  templateUrl: './ec-pan-am.component.html',
  styleUrls: ['./ec-pan-am.component.scss']
})
export class EcPanAmComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  showInput = false;
  title = 'My first AGM project';
  lat = 8.908692;
  lng = -79.780979;

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
