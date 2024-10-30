import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormHandlerComponent } from "./components/form-handler/form-handler.component";
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ExampleFormData } from './example-data/form-handler-data';



@Component({
  selector: 'app-form-base',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormHandlerComponent, PrimeNgModule],
  templateUrl: './form-base.component.html',
  styleUrl: './form-base.component.scss'
})
export class FormBaseComponent {

  private _formData: ExampleFormData = new ExampleFormData();

  constructor() {
  }


  get FormBase(): FormGroup {
    return this._formData.FormBase;
  }

  public sendForm(): void {
    this._formData.submit();
  }

  public resetForm(): void {
    this._formData.reset();
  }


}
