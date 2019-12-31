import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcPanAmComponent } from './ec-pan-am.component';

describe('EcPanAmComponent', () => {
  let component: EcPanAmComponent;
  let fixture: ComponentFixture<EcPanAmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcPanAmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcPanAmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
