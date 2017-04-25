import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { ActivateGuard } from '../ActivateGuard';
import { ActivateUser } from '../ActivateUser';
import { RegistrationService } from '../registration-service.service';
@Component({
	moduleId: module.id,
	templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
	model: any = {};
	list:any[]=[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private rs: RegistrationService,
		private au : ActivateUser
) { }

	ngOnInit() {
	}

	login() {
			let list=this.rs.getUser();
			for(let i=0;i<list.length;i++)
			{
				 if (this.model.username == list[i].username && this.model.password == list[i].account.password) {
					this.au.setCanActivate(true,this.model.username);
					this.router.navigate(['/user']);
					}
				else { 
						alert('Invalid Username'); 
					}
			}
			}
}
