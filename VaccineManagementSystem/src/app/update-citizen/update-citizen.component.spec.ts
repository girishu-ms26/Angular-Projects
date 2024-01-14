import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCitizenComponent } from './update-citizen.component';

describe('UpdateCitizenComponent', () => {
  let component: UpdateCitizenComponent;
  let fixture: ComponentFixture<UpdateCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCitizenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
