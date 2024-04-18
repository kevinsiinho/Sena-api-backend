import { Entity } from '@loopback/repository';
export declare class Seccion extends Entity {
    id?: string;
    nombre: string;
    posicion: number;
    fechaCreacion?: string;
    fechaActualizacion?: string;
    cursoId: string;
    constructor(data?: Partial<Seccion>);
}
export interface SeccionRelations {
}
export type SeccionWithRelations = Seccion & SeccionRelations;
