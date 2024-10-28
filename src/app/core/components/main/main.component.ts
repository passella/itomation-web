import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {VisualizarPropostaComponent} from '../../../features/proposta/views/visualizar-proposta/visualizar-proposta.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    Button,
    VisualizarPropostaComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
