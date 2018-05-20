import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleFrequenciaComponent } from './controle-frequencia.component';

describe('ControleFrequenciaComponent', () => {
  let component: ControleFrequenciaComponent;
  let fixture: ComponentFixture<ControleFrequenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleFrequenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleFrequenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
