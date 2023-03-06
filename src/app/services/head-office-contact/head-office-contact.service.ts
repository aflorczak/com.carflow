import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HeadOfficeContact} from "../../interfaces/head-office-contact";
import {MOCKHEADOFFICECONTACT} from "./mock-head-office-contact";

@Injectable({
  providedIn: 'root'
})
export class HeadOfficeContactService {

  constructor() { }

  getContact(): Observable<HeadOfficeContact> {
    return of(MOCKHEADOFFICECONTACT);
  }
}
