import { Observable, of, Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegistroEntradasRepository } from "../domain/registro-entradas-repository";
import { environment } from "../environments/environment";
import { GetRegistroEntradasDto } from "../domain/get-registro-entradas.models";
import { Pager } from "../domain/pager.model";

@Injectable({
    providedIn: 'root'
})
export class RegistroEntradasApiService extends RegistroEntradasRepository {

    private _url: string = '';
    private _actionUrl: string = 'RegistroEntrada';

    constructor(private http: HttpClient) {
        super();
        this._url = environment.apiBilrust || '';
    }

    getRegistrosEntradas(   PageNumber: number | undefined, 
                            PageSize: number | undefined , 
                            Search: string | undefined) : Observable<Pager<GetRegistroEntradasDto>> 
    {
        debugger

        PageNumber = PageNumber || 1; // Si PageNumber es undefined, asigna 1
        PageSize = PageSize || 10; 

        // Filtrar por búsqueda si se proporciona
        let filteredItems = registrosEntradas;
        if (Search) {
            filteredItems = registrosEntradas.filter(item =>
                item.motivoEntrada.toLowerCase().includes(Search.toLowerCase()) ||
                item.personaRegistrada.nombreCompleto.toLowerCase().includes(Search.toLowerCase())
            );
        }

        const totalCount = filteredItems.length;
        const totalPages = Math.ceil(totalCount / PageSize);
        const startIndex = (PageNumber - 1) * PageSize;
        const items = filteredItems.slice(startIndex, startIndex + PageSize);

        const pager: Pager<GetRegistroEntradasDto> = {
            currentPage: PageNumber,
            pageSize: PageSize,
            totalCount,
            search: Search || '',
            items,
            totalPages,
            hasPrevious: PageNumber > 1,
            hasNext: PageNumber < totalPages,
        };


        return of(pager);
    }


}


// Generamos los registros de entradas
const registrosEntradas = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    fechaCreacion: `2024-10-${String(i % 30 + 1).padStart(2, '0')}T10:00:00Z`,
    motivoEntrada: ["Reunión de negocios", "Entrevista de trabajo", "Visita técnica", "Capacitación"][i % 4],
    comentarios: `Comentario ${i + 1} sobre el motivo de la entrada.`,
    personaRegistrada: {
        nombreCompleto: `Persona ${i + 1}`,
        fechaNacimiento: `199${i % 10}-0${(i % 9) + 1}-15`,
        isEmpleado: i % 2 === 0,
        empleadoId: i % 2 === 0 ? i + 100 : null,
        noEmpleado: i % 2 !== 0 ? i + 200 : null,
        puesto: ["Desarrollador de Software", "Gerente de Proyectos", "Analista", "Soporte Técnico"][i % 4],
        departamento: ["Tecnología", "Recursos Humanos", "Administración", "Operaciones"][i % 4]
    },
    acompañantes: [
        {
            nombre: `Acompañante ${i + 1}A`,
            edad: 20 + (i % 10)
        },
        {
            nombre: `Acompañante ${i + 1}B`,
            edad: 25 + (i % 5)
        }
    ]
}));