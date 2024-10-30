import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseFormDirective } from "../directives/base-form-directive";


export class ExampleFormData extends BaseFormDirective {
    

    constructor() {
        super();
    }


    override buildForm() {
        return new FormGroup({
            name: new FormControl('', [Validators.required]),
            email: new FormControl('', Validators.required),
            phone: new FormControl('', [Validators.required]),
        });
    }


}