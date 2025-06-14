import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailsComponent } from './updatedetails.component';

describe('UpdatedetailsComponent', () => {
  let component: UpdateDetailsComponent;
  let fixture: ComponentFixture<UpdateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
