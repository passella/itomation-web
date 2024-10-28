import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RadioGroupComponent} from '../../../../shared/components/radio-group/radio-group.component';
import {Canal} from '../../models/canal.model';
import {Seguimento} from '../../models/seguimento.model';
import {FormularioPropostaService} from '../../services/formulario-proposta.service';
import {DropdownComponent} from '../../../../shared/components/dropdown/dropdown.component';
import {Modalidade} from '../../models/modalidade.model';
import {DropdownModule} from 'primeng/dropdown';
import {Formalizacao} from '../../models/formalizacao.model';
import {FloatLabelModule} from 'primeng/floatlabel';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberComponent} from '../../../../shared/components/input-number/input-number.component';
import {SIM_NAO_OPCOES, SimNao} from '../../models/simnao.model';


@Component({
  selector: 'app-formulario-proposta',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RadioButtonModule,
    RadioGroupComponent,
    DropdownComponent,
    DropdownModule,
    FloatLabelModule,
    InputNumberModule,
    InputTextModule,
    InputNumberComponent
  ],
  templateUrl: './formulario-proposta.component.html',
  styleUrls: ['./formulario-proposta.component.scss']
})
export class FormularioPropostaComponent implements OnInit {
  @Input() somenteLeitura: boolean = false;
  formGroup!: FormGroup;
  canais: Canal[] = [];
  seguimentos: Seguimento[] = [];
  modalidades: Modalidade[] = [];
  formalizacoes: Formalizacao[] = [];
  contaPrincipalOptions: SimNao[] = [];


  constructor(
    private formBuilder: FormBuilder,
    private formularioPropostaService: FormularioPropostaService
  ) {
  }

  ngOnInit(): void {
    this.canais = this.formularioPropostaService.getCanais();
    this.seguimentos = this.formularioPropostaService.getSeguimentos();
    this.modalidades = this.formularioPropostaService.getModalidades();
    this.formalizacoes = this.formularioPropostaService.getFormalizacoes();
    this.contaPrincipalOptions = SIM_NAO_OPCOES;
    const canalPadrao = this.canais.find(canal => canal.id === '341');
    const seguimentoPadrao = this.seguimentos.find(seguimento => seguimento.id === 'INSS');
    const modalidadePadrao = this.modalidades.find(modalidade => modalidade.id === 'novoEmprestimo');
    const formalizacaoPadrao = this.formalizacoes.find(formalizacao => formalizacao.id === 'biometria')

    this.formGroup = this.formBuilder.group({
      canalSelecionado: [canalPadrao || '', Validators.required],
      seguimentoSelecionado: [seguimentoPadrao || '', Validators.required],
      modalidadeSelecionada: [modalidadePadrao || '', Validators.required],
      formalizacaoSelecionada: [formalizacaoPadrao || '', Validators.required],
      codigoBanco: [null, Validators.required],
      numeroAgencia: [null, Validators.required],
      numeroConta: [null, Validators.required],
      digitoConta: [null, Validators.required],
      codigoMeioPagamento: [null, Validators.required],
      codigoTipoConta: [null, Validators.required],
      contaPrincipal: [null, Validators.required]
    });
  }

  salvarProposta(): void {
    if (this.somenteLeitura) {
      return;
    }

    if (this.formGroup.valid) {
      console.log("Salvar Proposta", this.formGroup.value);
    } else {
      console.log("Formulário inválido");
    }
  }
}
