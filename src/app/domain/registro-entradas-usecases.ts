import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pager } from "./pager.model";
import { GetRegistroEntradasDto } from "./get-registro-entradas.models";
import { RegistroEntradasRepository } from "./registro-entradas-repository";



@Injectable({
    providedIn: 'root'
})
export class RegistroEntradasUseCases {
    constructor(private registroEntradasRepository: RegistroEntradasRepository) {}

    getRegistrosEntradas(   PageNumber:number|undefined = 1, 
                            PageSize:number|undefined = 10, 
                            Search:string|undefined = ""): Observable<Pager<GetRegistroEntradasDto>> {
        return this.registroEntradasRepository.getRegistrosEntradas(PageNumber, PageSize, Search);
    }

    getRegistrosEntradas2(   PageNumber:number, 
                            PageSize:number): Observable<Pager<GetRegistroEntradasDto>> {
        return this.registroEntradasRepository.getRegistrosEntradas(PageNumber, PageSize, "");
    }
}
