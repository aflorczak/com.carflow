import {Component, OnInit} from '@angular/core';
import {HeadOfficeContact} from "../../interfaces/head-office-contact";
import {HeadOfficeContactService} from "../../services/head-office-contact/head-office-contact.service";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  data?: HeadOfficeContact;

  constructor(private headOfficeContactService: HeadOfficeContactService) { }

  getData(): void {
    this.headOfficeContactService.getContact().subscribe(data => this.data = data);
  }

  ngOnInit() {
    this.getData();
  }

}
