import {Component, OnInit} from '@angular/core';
import {Faq} from "../../interfaces/faq";
import {FaqService} from "../../services/faq/faq.service";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit{
  faqs?: Faq[];

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getFaqs().subscribe(faqs => this.faqs = faqs);
  }

}
