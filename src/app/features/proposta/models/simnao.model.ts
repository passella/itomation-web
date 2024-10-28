export interface SimNao {
  id: boolean;
  nome: string;
}

export const SIM_NAO_OPCOES: SimNao[] = [
  {id: true, nome: 'Sim'},
  {id: false, nome: 'Não'}
];
