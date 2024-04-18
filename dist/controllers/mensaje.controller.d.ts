import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Mensaje } from '../models';
import { MensajeRepository } from '../repositories';
export declare class MensajeController {
    mensajeRepository: MensajeRepository;
    constructor(mensajeRepository: MensajeRepository);
    create(mensaje: Omit<Mensaje, 'id'>): Promise<Mensaje>;
    count(where?: Where<Mensaje>): Promise<Count>;
    find(filter?: Filter<Mensaje>): Promise<Mensaje[]>;
    updateAll(mensaje: Mensaje, where?: Where<Mensaje>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Mensaje>): Promise<Mensaje>;
    updateById(id: string, mensaje: Mensaje): Promise<void>;
    replaceById(id: string, mensaje: Mensaje): Promise<void>;
    deleteById(id: string): Promise<void>;
}
