import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export abstract class BaseFormDirective {

    private formBase: FormGroup = new FormGroup({});
    private formServiceEnd: IFormServiceEnd | undefined = undefined;

    constructor() {
        this.formBase = this.buildForm();
    }
    
    protected buildForm() : FormGroup {
        return new FormGroup({});
    }

    protected validateForm() : boolean {
        if (this.formBase.invalid) {
            this.formBase.markAllAsTouched();
            console.log('Formulário inválido');
            console.log(this.formBase.value);
            return false;
        }
        console.log('Formulário válido');
        return true;
    }

    // Validaar Seccion
    protected validateSection(section: string) : boolean {
        return true;
    }

    public submit(): void {
        if (this.validateForm()) {
            // this._sendForm();
            return;
        }
    }

    public reset(): void {
        this.formBase.reset();
    }

    // Método que envia el formulário
    protected _sendForm() : void {
        if (this.formServiceEnd === undefined || this.formServiceEnd === null) {
            console.log('Servicio de envio de formulario no definido');
            return;
        }

        this.formServiceEnd.addItem(this.formBase.value).subscribe(
            (response) => {
                console.log('Formulário enviado com sucesso');
            },
            (error) => {
                console.log('Erro ao enviar formulário');
            }
        );
    }

    private setFormServiceEnd(formServiceEnd: IFormServiceEnd) : void {
        this.formServiceEnd = formServiceEnd;
    }

    get FormBase() : FormGroup {
        return this.formBase;
    }



}

export interface IFormServiceEnd {
    addItem(json:any): Observable<any>;
}