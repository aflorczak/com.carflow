import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationContactPageComponent } from './location-contact-page.component';

describe('LocationContactPageComponent', () => {
  let component: LocationContactPageComponent;
  let fixture: ComponentFixture<LocationContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationContactPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
