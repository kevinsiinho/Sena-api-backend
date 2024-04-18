import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Seccion } from '../models';
import { SeccionRepository } from '../repositories';
export declare class SeccionController {
    seccionRepository: SeccionRepository;
    constructor(seccionRepository: SeccionRepository);
    create(seccion: Omit<Seccion, 'id'>): Promise<Seccion>;
    count(where?: Where<Seccion>): Promise<Count>;
    find(filter?: Filter<Seccion>): Promise<Seccion[]>;
    updateAll(seccion: Seccion, where?: Where<Seccion>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Seccion>): Promise<Seccion>;
    updateById(id: string, seccion: Seccion): Promise<void>;
    replaceById(id: string, seccion: Seccion): Promise<void>;
    deleteById(id: string): Promise<void>;
}
