import { Component, Input } from '@angular/core';
import { BaseFormDirective } from '../../directives/base-form-directive';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExampleFormData } from '../../example-data/form-handler-data';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';


@Component({
  selector: 'app-form-handler',
  standalone: true,
  imports: [ReactiveFormsModule, PrimeNgModule],
  templateUrl: './form-handler.component.html',
  styleUrl: './form-handler.component.scss'
})
export class FormHandlerComponent {

  @Input() FormBase: FormGroup = new FormGroup({});

  constructor() {
  }




}

