import { Injectable } from '@angular/core';
import {LocationContact} from "../../interfaces/location-contact";
import {Observable, of} from "rxjs";
import {MOCKLOCATIONCONTACT} from "./mock-location-contact";

@Injectable({
  providedIn: 'root'
})
export class LocationContactService {

  constructor() { }

  getLocationData(slug: string | null): Observable<any>{
    if (MOCKLOCATIONCONTACT.find(item => item.slug == slug)) {
      return of(MOCKLOCATIONCONTACT.find(item => item.slug == slug));
    } else {
      return of({});
    }
  }
}
