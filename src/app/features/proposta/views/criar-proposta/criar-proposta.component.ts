import { Component } from '@angular/core';
import {FormularioPropostaComponent} from '../../components/formulario-proposta/formulario-proposta.component';
import {PainelAcompanhamentoComponent} from '../../components/painel-acompanhamento/painel-acompanhamento.component';

@Component({
  selector: 'app-criar-proposta',
  standalone: true,
  imports: [
    FormularioPropostaComponent,
    PainelAcompanhamentoComponent
  ],
  templateUrl: './criar-proposta.component.html',
  styleUrl: './criar-proposta.component.scss'
})
export class CriarPropostaComponent {

}
