import { Entity } from '@loopback/repository';
export declare class HisotorialMensajes extends Entity {
    id?: string;
    mensaje_id: string;
    emisor: string;
    receptor: string;
    contenido: string;
    fecha_envio: string;
    constructor(data?: Partial<HisotorialMensajes>);
}
export interface HisotorialMensajesRelations {
}
export type HisotorialMensajesWithRelations = HisotorialMensajes & HisotorialMensajesRelations;
