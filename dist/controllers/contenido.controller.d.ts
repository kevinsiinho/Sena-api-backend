import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Contenido } from '../models';
import { ContenidoRepository } from '../repositories';
export declare class ContenidoController {
    contenidoRepository: ContenidoRepository;
    constructor(contenidoRepository: ContenidoRepository);
    create(contenido: Omit<Contenido, 'id'>): Promise<Contenido>;
    count(where?: Where<Contenido>): Promise<Count>;
    find(filter?: Filter<Contenido>): Promise<Contenido[]>;
    updateAll(contenido: Contenido, where?: Where<Contenido>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Contenido>): Promise<Contenido>;
    updateById(id: string, contenido: Contenido): Promise<void>;
    replaceById(id: string, contenido: Contenido): Promise<void>;
    deleteById(id: string): Promise<void>;
}
