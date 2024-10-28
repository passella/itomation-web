import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAcompanhamentoComponent } from './painel-acompanhamento.component';

describe('PainelAcompanhamentoComponent', () => {
  let component: PainelAcompanhamentoComponent;
  let fixture: ComponentFixture<PainelAcompanhamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelAcompanhamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelAcompanhamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
