import { Injectable } from '@angular/core';

@Injectable()
export class RegistrationService {
  public userlist:any[]=[];
  constructor() { }


addUser(user)
{
	this.userlist.push(user);
}
getUser()
{
	return this.userlist;
}
}
