import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiderSensorComponent } from './spider-sensor.component';

describe('SpiderSensorComponent', () => {
  let component: SpiderSensorComponent;
  let fixture: ComponentFixture<SpiderSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiderSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpiderSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
