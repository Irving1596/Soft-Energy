import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcbahiaminasComponent } from './ecbahiaminas.component';

describe('EcbahiaminasComponent', () => {
  let component: EcbahiaminasComponent;
  let fixture: ComponentFixture<EcbahiaminasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcbahiaminasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcbahiaminasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
