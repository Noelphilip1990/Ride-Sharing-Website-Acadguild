import { Component,OnChanges,OnInit } from '@angular/core';
import {ActivateUser} from './ActivateUser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,OnInit{
  title = 'Events';
  status:boolean=false;
  constructor(public au:ActivateUser, private router: Router){
   console.log("Status check:"+au.canActivate());
   // changes.prop contains the old and the new value...	
   
   
  }
  ngOnInit()
  {
		this.status=this.au.canActivate()
  }
  ngOnChanges(changes) {
    //this.status=
   // console.log("Status check:"+this.au.canActivate());// changes.prop contains the old and the new value...
  }
  logout() {
		this.au.setCanActivate(false,"");
		this.router.navigate(['']);
	}
}
