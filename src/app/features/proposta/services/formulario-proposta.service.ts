import {Injectable} from '@angular/core';
import {Canal} from '../models/canal.model';
import {Seguimento} from '../models/seguimento.model';
import {Modalidade} from '../models/modalidade.model';
import {Formalizacao} from '../models/formalizacao.model';

@Injectable({
  providedIn: 'root'
})
export class FormularioPropostaService {
  getCanais(): Canal[] {
    return [
      {id: '341', nome: 'Interno'},
      {id: '029', nome: 'Externo'}
    ];
  }

  getSeguimentos(): Seguimento[] {
    return [
      {id: 'INSS', nome: 'INSS'},
      {id: 'OP', nome: 'OP'},
      {id: 'EP', nome: 'EP'}
    ];
  }

  getModalidades(): Modalidade[] {
    return [
      {id: 'novoEmprestimo', nome: 'Novo Emprestimo'},
      {id: 'refinanciamento', nome: 'Refinanciamento'},
    ]
  }

  getFormalizacoes(): Formalizacao[] {
    return [
      {id: 'biometria', nome: 'Biometria'},
      {id: 'pin', nome: 'Pin'},
      {id: 'biometriaPin', nome: 'Biometria + Pin'}
    ]

  }
}
