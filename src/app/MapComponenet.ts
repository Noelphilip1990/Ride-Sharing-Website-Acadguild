import { Component, ElementRef,NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import{ MapService } from './MapService';
import { Map } from './model/map';
import { RatingModule } from "ng2-rating";
import {Ng2PaginationModule} from 'ng2-pagination';
//import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ModalModule,Modal} from "ng2-modal";
@Component({
  selector: 'my-map',
  styles: [`
    .sebm-google-map-container {
       height: 400px;
     }
     pagination-controls /deep/  .pagination li
     {
       background-color:#C8C8C8;
     }
     pagination-controls /deep/  .pagination-previous
     {
          background-color: #4CAF50; /* Green */
          border: 1px solid green;
          border-radius:5px;
          color: white;
          
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          cursor: pointer;
     }
     pagination-controls /deep/  .pagination-next
     {
          background-color: #4CAF50; /* Green */
          border: 1px solid green;
          border-radius:5px;
          color: white;
          
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          cursor: pointer;
     }
  `],
  templateUrl: "MapComponentHTML.html"
})
export class MapApp implements OnInit {
  //@ViewChild('modal')
  //modal: ModalComponent;
  public dlat:number;
  public dlon:number;
  public latitude: number;
  public SearchPlaces: string="Edappally";
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  public type:string;
  public list: any[]=[];
  public taxis: any[]=
  [
  {latitude:10.02669,longitude:76.3088819,DriverName:'Josh',number:9633086558},
  {latitude:10.0224555,longitude:76.3099666,DriverName:'Jacob',number:9633086558}
  ];
  public rate:number=4;
  public rating: number[] = [];
  @ViewChild("search")
  public searchElementRef: ElementRef;
  open() {
      //  this.modal.open();
    }
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private ms:MapService
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    
    this.zoom = 15;
    this.latitude = 10.0236761;
    this.longitude = 76.3116235;
    this.dlat=this.latitude;
    this.dlon=this.longitude;
    this.loadMap();
    console.log(this.list);
    //this.type="restaurant";
    //create search FormControl
    this.searchControl = new FormControl();
    
    //set current position
    this.setCurrentPosition();
  
        //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete.getPlace();
        console.log("PLACE:"+place.name);
        //verify result
        this.SearchPlaces=place.name;
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }

        //set latitude, longitude and zoom
        this.dlat = place.geometry.location.lat();
        this.dlon = place.geometry.location.lng();
        this.zoom = 15;
        this.list = [];
        this.rating = [];
        this.ms.getHotels(String(this.latitude), String(this.longitude))
           .subscribe(
             //adding data objects to lists.
             data => {
                for (let i = 0; i < data.length; i++) {
                   this.list.push(data[i]);
                   this.rating.push(data[i].rating);
                }
             },
             err => {
          console.log("Error in map:" + err);
         });
        });
      });
    });
  }

  loadMap()
  {
    this.ms.getHotels(String(this.latitude), String(this.longitude))
    .subscribe(
    data => { 
    for (let i = 0; i < data.length;i++)
    {
      this.list.push(data[i]);
    this.rating.push(data[i].rating);
  console.log(data[i].rating);
        }
     },
     // data=>this.list=data,
      err=>
      {
        console.log("Errormap:"+err);
      }
    )
}

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        this.type ="restaurant";
      });
    }
  }
}