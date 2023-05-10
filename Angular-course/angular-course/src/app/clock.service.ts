import { Injectable } from '@angular/core';

// Inject - mechnishem to allow sharing data and functionilty between mutible components
// The service injected to the root and can be accessed in all paths.
// The service global singelton provded in the root of the app, won't be changed or destroyed.
// Stateless service - libary contains only functionlaity.

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  tick = 0;

  constructor() {
      setInterval(() => this.tick++, 1000);
   }
}
