import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Faq} from "../../interfaces/faq";
import {FAQ} from "./mock-faq";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  getFaqs(): Observable<Faq[]> {
    return of(FAQ);
  }
}
