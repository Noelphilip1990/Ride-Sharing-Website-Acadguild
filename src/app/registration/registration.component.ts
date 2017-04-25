import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { usernameMatcher, passwordMatcher } from './customValidator';
import { RegistrationService } from '../registration-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})



export class RegistrationComponent implements OnInit {	
	
	passwordRegex = '[a-z0-9]{7,20}';
	
	complexForm: FormGroup;
	constructor(fb: FormBuilder,private rs:RegistrationService, private route:Router) {
		console.log('HELP:'+usernameMatcher);
		this.complexForm = fb.group({
			name: ['', Validators.required],
			username: ['', Validators.required],
			email: ['', Validators.required],
			mobile: [''],
			account: fb.group({
			password: ['', Validators.required],
			cpassword: ['', Validators.required ]
			}, {validator:passwordMatcher})
		
		})
	
	}
	
	submitForm(form:any)
	{
		this.rs.addUser(form);
		console.log("values:");
		console.log(form);
		this.route.navigate(['/login']);
	}
	
	ngOnInit()
	{
		
	}
	
 


}


 
