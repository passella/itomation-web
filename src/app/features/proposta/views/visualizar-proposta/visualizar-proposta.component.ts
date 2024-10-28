import { Component } from '@angular/core';
import {PainelAcompanhamentoComponent} from '../../components/painel-acompanhamento/painel-acompanhamento.component';
import {FormularioPropostaComponent} from '../../components/formulario-proposta/formulario-proposta.component';

@Component({
  selector: 'app-visualizar-proposta',
  standalone: true,
  imports: [
    PainelAcompanhamentoComponent,
    FormularioPropostaComponent
  ],
  templateUrl: './visualizar-proposta.component.html',
  styleUrl: './visualizar-proposta.component.scss'
})
export class VisualizarPropostaComponent {

}
