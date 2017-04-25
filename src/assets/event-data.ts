import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class EventData implements InMemoryDbService {
	createDb() {
		let events = [
			//{ id:'0', name: 'Noel', date: "2017-03-30", description: "This event is for Noel's Birthday", session: [] }
		];
		return { events };
	}
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/