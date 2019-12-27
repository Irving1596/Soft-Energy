import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhidraulicaComponent } from './ehidraulica.component';

describe('EhidraulicaComponent', () => {
  let component: EhidraulicaComponent;
  let fixture: ComponentFixture<EhidraulicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhidraulicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhidraulicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
