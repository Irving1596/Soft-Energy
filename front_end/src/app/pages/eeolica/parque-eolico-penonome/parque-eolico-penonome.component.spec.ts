import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParqueEolicoPenonomeComponent } from './parque-eolico-penonome.component';

describe('ParqueEolicoPenonomeComponent', () => {
  let component: ParqueEolicoPenonomeComponent;
  let fixture: ComponentFixture<ParqueEolicoPenonomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParqueEolicoPenonomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParqueEolicoPenonomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
