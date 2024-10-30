import { RegistroEntradasRepository } from "../domain/registro-entradas-repository";
import { RegistroEntradasUseCases } from "../domain/registro-entradas-usecases";
import { RegistroEntradasApiService } from "./registro-entradas-implementation.repository";


export const dataProviders = [
  RegistroEntradasUseCases,
  { provide: RegistroEntradasRepository, useClass: RegistroEntradasApiService},

];