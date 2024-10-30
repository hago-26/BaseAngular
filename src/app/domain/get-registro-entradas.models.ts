
export interface GetRegistroEntradasDto {
    id: number;
    fechaCreacion: string;
    motivoEntrada: string;
    comentarios: string;
    personaRegistrada: GetPersonaRegistradaDto;
    acompañantes: AcompañanteDto[];
}

export interface GetPersonaRegistradaDto {
    nombreCompleto: string;
    fechaNacimiento: string;
    isEmpleado: boolean;
    empleadoId: number | null;
    noEmpleado: number | null;
    puesto: string;
    departamento: string;
}

export interface AcompañanteDto {
    nombre: string;
    edad: number;
}