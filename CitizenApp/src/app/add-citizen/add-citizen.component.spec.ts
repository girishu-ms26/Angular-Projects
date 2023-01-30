import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCitizenComponent } from './add-citizen.component';

describe('AddorupdateCitizenComponent', () => {
  let component: AddCitizenComponent;
  let fixture: ComponentFixture<AddCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
