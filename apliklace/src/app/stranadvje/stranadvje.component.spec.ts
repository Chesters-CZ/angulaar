import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranadvjeComponent } from './stranadvje.component';

describe('StranadvjeComponent', () => {
  let component: StranadvjeComponent;
  let fixture: ComponentFixture<StranadvjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StranadvjeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StranadvjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
