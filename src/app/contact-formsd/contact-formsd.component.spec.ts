import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormsdComponent } from './contact-formsd.component';

describe('ContactFormsdComponent', () => {
  let component: ContactFormsdComponent;
  let fixture: ComponentFixture<ContactFormsdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormsdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
