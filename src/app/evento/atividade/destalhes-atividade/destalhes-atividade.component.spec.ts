import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestalhesAtividadeComponent } from './destalhes-atividade.component';

describe('DestalhesAtividadeComponent', () => {
  let component: DestalhesAtividadeComponent;
  let fixture: ComponentFixture<DestalhesAtividadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestalhesAtividadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestalhesAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
