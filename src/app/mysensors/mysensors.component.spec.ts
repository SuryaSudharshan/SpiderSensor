import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysensorsComponent } from './mysensors.component';

describe('MysensorsComponent', () => {
  let component: MysensorsComponent;
  let fixture: ComponentFixture<MysensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
