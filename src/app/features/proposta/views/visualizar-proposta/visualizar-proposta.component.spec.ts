import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPropostaComponent } from './visualizar-proposta.component';

describe('VisualizarPropostaComponent', () => {
  let component: VisualizarPropostaComponent;
  let fixture: ComponentFixture<VisualizarPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarPropostaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
