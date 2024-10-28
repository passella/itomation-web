import {Component} from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {MenuModule} from 'primeng/menu';
import {Button} from 'primeng/button';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {NgOptimizedImage} from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {DropdownComponent} from '../../../shared/components/dropdown/dropdown.component';


interface Ambiente {
  id: string;
  nome: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ToastModule,
    MenuModule,
    Button,
    NgOptimizedImage,
    DropdownModule,
    FormsModule,
    DropdownComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: MenuItem[] = [
    {
      label: 'Nova Proposta', icon: 'pi pi-plus', id: "1", command(event: MenuItemCommandEvent) {
        console.log("Nova Proposta")
      }
    },
    {
      label: 'Procurar Proposta', icon: 'pi pi-search', id: "2", command(event: MenuItemCommandEvent) {
        console.log("Procurar Proposta")
      }
    }
  ];

  ambientes: Ambiente[] = [
    {id: 'dev', nome: 'Desenvolvimento'},
    {id: 'hom', nome: 'Homologação'},
  ];

  ambienteSelecionado: Ambiente | null = null;

}
