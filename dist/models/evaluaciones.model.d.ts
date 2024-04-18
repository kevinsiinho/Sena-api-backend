import { Entity } from '@loopback/repository';
export declare class Evaluaciones extends Entity {
    id?: string;
    nombre: string;
    fechaCreacion: string;
    fechaTerminacion: string;
    tiempoPrueba: number;
    intentos: number;
    Preguntas: object[];
    Participantes: object[];
    constructor(data?: Partial<Evaluaciones>);
}
export interface EvaluacionesRelations {
}
export type EvaluacionesWithRelations = Evaluaciones & EvaluacionesRelations;
