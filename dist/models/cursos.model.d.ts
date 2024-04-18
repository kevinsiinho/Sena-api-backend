import { Entity } from '@loopback/repository';
export declare class Cursos extends Entity {
    id?: string;
    nombre: string;
    descripcion: string;
    estado: string;
    fechaCreacion: string;
    fechaActualizacion?: string;
    imagen: string;
    creadorId: string;
    participantes: string[];
    secciones: string[];
    constructor(data?: Partial<Cursos>);
}
export interface CursosRelations {
}
export type CursosWithRelations = Cursos & CursosRelations;
