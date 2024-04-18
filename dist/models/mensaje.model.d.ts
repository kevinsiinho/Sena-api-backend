import { Entity } from '@loopback/repository';
export declare class Mensaje extends Entity {
    id?: string;
    participantes: string[];
    ultimo_mensaje: string;
    fecha_ultimo_mensaje: string;
    constructor(data?: Partial<Mensaje>);
}
export interface MensajeRelations {
}
export type MensajeWithRelations = Mensaje & MensajeRelations;
