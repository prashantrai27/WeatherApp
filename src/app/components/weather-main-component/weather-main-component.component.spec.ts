import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainComponentComponent } from './weather-main-component.component';

describe('WeatherMainComponentComponent', () => {
  let component: WeatherMainComponentComponent;
  let fixture: ComponentFixture<WeatherMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
