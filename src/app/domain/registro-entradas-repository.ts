import { Observable } from "rxjs";
import { Pager } from "./pager.model";
import { GetRegistroEntradasDto } from "./get-registro-entradas.models";


export abstract class RegistroEntradasRepository {
    abstract getRegistrosEntradas(  PageNumber:number|undefined , 
                                    PageSize:number|undefined, 
                                    Search:string|undefined): Observable<Pager<GetRegistroEntradasDto>>;
}