import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import{Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MapService {

constructor(private http: Http) { 
	  
  }

private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

	private _serverError(err: any) {
		console.log('sever error:', err);  // debug
		if (err instanceof Response) {
			return Observable.throw(err.json().error || 'backend server error');
			// if you're using lite-server, use the following line
			// instead of the line above:
			//return Observable.throw(err.text() || 'backend server error');
		}
		return Observable.throw(err || 'backend server error');
	}


//Get Hotel by json from google api link
  getHotels(lat:string,lon:string): Observable<any[]> {
	  let headers = new Headers({ 'Content-Type': 'application/json' });
	  let options = new RequestOptions({ headers: headers }); // Create a request option


	  // ...using get request
	  return this.http.get("https://maps.googleapis.com/maps/api/place/textsearch/json?location="+lat+","+lon+"&radius=500&&type=restaurant&key=AIzaSyBvtzk4UHVyc9hvEuMPJdPH5xu4xVfRA7s")
		 
		 // ...and calling .json() on the response to return data with results array. 
		  .map(response => { return response.json().results })
		  //...errors if any
		  //.catch((error: any) => Observable.throw(error.json().error || 'Server error'));
		  .do(data => console.log(data))//this.eventList=data)  // debug
          .catch(this._serverError);

  }
   

	
   
   
 

}
