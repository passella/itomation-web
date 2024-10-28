import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPropostaComponent } from './formulario-proposta.component';

describe('FormularioPropostaComponent', () => {
  let component: FormularioPropostaComponent;
  let fixture: ComponentFixture<FormularioPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPropostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
