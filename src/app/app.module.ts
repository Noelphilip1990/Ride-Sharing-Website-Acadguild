import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule , JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MapApp } from './MapComponenet';
import { MapService } from './MapService';
import { RatingModule } from "ng2-rating";
import { Ng2PaginationModule } from 'ng2-pagination';
import { Angular2StripeAppComponent } from './angular2-stripe.component';
import { ModalModule } from "ng2-modal";
import { LoginComponent } from './login/login.component';
import { routing } from './app.Routes';
import { ActivateUser } from './ActivateUser';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MapApp,
    LoginComponent,
    Angular2StripeAppComponent,
    RegistrationComponent

  ],
  imports: [
    Ng2PaginationModule,
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    HttpModule,
    ModalModule,
    JsonpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvtzk4UHVyc9hvEuMPJdPH5xu4xVfRA7s',
      libraries: ["places"]
    })
    
  ],
  providers: [MapService, ActivateUser, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
