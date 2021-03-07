import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import { CheckedformsComponent } from './checkedforms.component';

describe('CheckedformsComponent', () => {
  let component: CheckedformsComponent;
  let fixture: ComponentFixture<CheckedformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckedformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
