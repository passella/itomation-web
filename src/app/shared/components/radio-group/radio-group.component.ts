import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';

@Component({
  selector: 'app-radio-group',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RadioButtonModule
  ],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss'
})
export class RadioGroupComponent {
  @Input() formGroup!: FormGroup;
  @Input() options: any[] = [];
  @Input() title: string = '';
  @Input() controlName: string = '';
}
