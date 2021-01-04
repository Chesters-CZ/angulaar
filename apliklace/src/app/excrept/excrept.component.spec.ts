import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcreptComponent } from './excrept.component';

describe('ExcreptComponent', () => {
  let component: ExcreptComponent;
  let fixture: ComponentFixture<ExcreptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcreptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcreptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
