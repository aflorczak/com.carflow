import {Component, OnDestroy, OnInit} from '@angular/core';
import {LocationContact} from "../../interfaces/location-contact";
import {LocationContactService} from "../../services/location-contact/location-contact.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-location-contact-page',
  templateUrl: './location-contact-page.component.html',
  styleUrls: ['./location-contact-page.component.scss']
})
export class LocationContactPageComponent implements OnInit {
  data?: LocationContact  | null = null;

  constructor(
    private locationContactService: LocationContactService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  getData(slug: string | null): void {
    this.locationContactService.getLocationData(slug).subscribe(data => {
      // this.data = data;
      // console.log(data);
      // console.log(data.length)
      if (Object.keys(data).length === 0) {
        this.data = null;
      } else {
        this.data = data;
      }
    });
  }

  ngOnInit() {
    let slug = this.route.snapshot.paramMap.get('locationSlug');
    this.getData(slug);
    //console.log(this.data);
    //console.log('now');
  }
}
