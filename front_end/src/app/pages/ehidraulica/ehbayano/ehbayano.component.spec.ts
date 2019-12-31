import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhbayanoComponent } from './ehbayano.component';

describe('EhbayanoComponent', () => {
  let component: EhbayanoComponent;
  let fixture: ComponentFixture<EhbayanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhbayanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhbayanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
