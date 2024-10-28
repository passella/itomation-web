import { Component, Input } from '@angular/core';

interface Etapa {
  idProposta: string;
  nome: string;
  codigoRetorno: string;
  descricao: string;
  dataInicio: string;
  dataFim: string;
}

@Component({
  selector: 'app-painel-acompanhamento',
  standalone: true,
  templateUrl: './painel-acompanhamento.component.html',
  styleUrls: ['./painel-acompanhamento.component.scss']
})
export class PainelAcompanhamentoComponent {
  @Input() idProposta: string | null = null;

  // Mock de etapas
  etapas: Etapa[] = [
    {
      idProposta: '1',
      nome: 'Análise de Crédito',
      codigoRetorno: '200',
      descricao: 'A proposta está em análise de crédito.',
      dataInicio: '2023-10-01',
      dataFim: '2023-10-02'
    },
    {
      idProposta: '2',
      nome: 'Aprovação',
      codigoRetorno: '200',
      descricao: 'A proposta foi aprovada.',
      dataInicio: '2023-10-03',
      dataFim: '2023-10-04'
    },
    {
      idProposta: '3',
      nome: 'Finalização',
      codigoRetorno: '200',
      descricao: 'A proposta foi finalizada com sucesso.',
      dataInicio: '2023-10-05',
      dataFim: '2023-10-06'
    }
  ];
}
