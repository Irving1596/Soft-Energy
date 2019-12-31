import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhfortunaComponent } from './ehfortuna.component';

describe('EhfortunaComponent', () => {
  let component: EhfortunaComponent;
  let fixture: ComponentFixture<EhfortunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhfortunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhfortunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
