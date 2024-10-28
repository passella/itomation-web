import {Component, Input} from '@angular/core';
import {PaginatorModule} from "primeng/paginator";
import {RadioButtonModule} from "primeng/radiobutton";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-number',
  standalone: true,
    imports: [
        PaginatorModule,
        RadioButtonModule,
        ReactiveFormsModule
    ],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
  @Input() formGroup!: FormGroup;
  @Input() title: string = '';
  @Input() controlName: string = '';

}
