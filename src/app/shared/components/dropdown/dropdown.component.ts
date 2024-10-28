import {Component, Input} from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    PaginatorModule,
    RadioButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() formGroup!: FormGroup;
  @Input() options: any[] = [];
  @Input() title: string = '';
  @Input() controlName: string = '';
  @Input() placeHolder: string = '';
  @Input() optionLabel: string = '';
}
