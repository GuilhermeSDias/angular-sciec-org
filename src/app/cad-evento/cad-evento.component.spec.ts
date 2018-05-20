import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEventoComponent } from './cad-evento.component';

describe('CadEventoComponent', () => {
  let component: CadEventoComponent;
  let fixture: ComponentFixture<CadEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
