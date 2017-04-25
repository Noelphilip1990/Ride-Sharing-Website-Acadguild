import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ActivateUser } from './ActivateUser';
import { LoginComponent } from './login/login.component';
import { MapApp } from './MapComponenet';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes =  [
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'reg', component: RegistrationComponent },
	//{ path: 'user', component: MapComponent, canActivate: [ActivateUser] }
	{ path: 'user', component: MapApp ,canActivate: [ActivateUser]}
	
];

export const routing = RouterModule.forRoot(routes);