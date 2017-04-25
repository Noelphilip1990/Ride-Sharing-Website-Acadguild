import { AbstractControl, FormControl } from '@angular/forms';

//Custom validations
export function usernameMatcher(control: AbstractControl): { [key: string]: boolean } {
	//const user = control.get('username');
	let userRegex = /^([a-zA-Z0-9])\w+$/g;
	
	if (control.value =='Noel') {
		
		return null;//{ nice : true };
	}
	else{
		//console.log("USERs:" + user.value);
		return null;//{nomatchuser:true};
	
	}
};

export const  passwordMatcher=(control: FormControl): { [key: string]: boolean } =>{
	
	let passRegex = /^([a-z0-9])\w+$/g;;
	const pass1 = control.get('password');
	const pass2 = control.get('cpassword');
	
if (!pass1 || !pass2) {
    return null;
  }
  return pass1.value === pass2.value ? null : { nomatchpass: true };
};