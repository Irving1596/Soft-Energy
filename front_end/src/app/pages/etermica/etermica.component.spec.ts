import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtermicaComponent } from './etermica.component';

describe('EtermicaComponent', () => {
  let component: EtermicaComponent;
  let fixture: ComponentFixture<EtermicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtermicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtermicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
