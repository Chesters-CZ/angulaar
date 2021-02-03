import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitesoutComponent } from './litesout.component';

describe('LitesoutComponent', () => {
  let component: LitesoutComponent;
  let fixture: ComponentFixture<LitesoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitesoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitesoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
