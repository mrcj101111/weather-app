import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TideForecastComponent } from './tide-forecast.component';

describe('TideForecastComponent', () => {
  let component: TideForecastComponent;
  let fixture: ComponentFixture<TideForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TideForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TideForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
