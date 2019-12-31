import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeolicaComponent } from './eeolica.component';

describe('EeolicaComponent', () => {
  let component: EeolicaComponent;
  let fixture: ComponentFixture<EeolicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeolicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeolicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
