import { Entity } from '@loopback/repository';
export declare class Notificaciones extends Entity {
    id?: string;
    usuario: string;
    mensaje: string;
    leido: boolean;
    fecha_creacion: string;
    constructor(data?: Partial<Notificaciones>);
}
export interface NotificacionesRelations {
}
export type NotificacionesWithRelations = Notificaciones & NotificacionesRelations;
