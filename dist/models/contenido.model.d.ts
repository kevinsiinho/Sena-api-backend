import { Entity } from '@loopback/repository';
export declare class Contenido extends Entity {
    id?: string;
    fechaCreacion: string;
    nombre: string;
    descripcion?: string;
    tipo?: string;
    comentarios?: boolean;
    cursoId?: string;
    seccionId?: string;
    Observaciones?: Object[];
    constructor(data?: Partial<Contenido>);
}
export interface ContenidoRelations {
}
export type ContenidoWithRelations = Contenido & ContenidoRelations;
