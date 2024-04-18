import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Notificaciones } from '../models';
import { NotificacionesRepository } from '../repositories';
export declare class NotificacionesController {
    notificacionesRepository: NotificacionesRepository;
    constructor(notificacionesRepository: NotificacionesRepository);
    create(notificaciones: Omit<Notificaciones, 'id'>): Promise<Notificaciones>;
    count(where?: Where<Notificaciones>): Promise<Count>;
    find(filter?: Filter<Notificaciones>): Promise<Notificaciones[]>;
    updateAll(notificaciones: Notificaciones, where?: Where<Notificaciones>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Notificaciones>): Promise<Notificaciones>;
    updateById(id: string, notificaciones: Notificaciones): Promise<void>;
    replaceById(id: string, notificaciones: Notificaciones): Promise<void>;
    deleteById(id: string): Promise<void>;
}
