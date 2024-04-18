import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cursos } from '../models';
import { CursosRepository } from '../repositories';
export declare class CursosController {
    cursosRepository: CursosRepository;
    constructor(cursosRepository: CursosRepository);
    create(cursos: Omit<Cursos, 'id'>): Promise<Cursos>;
    count(where?: Where<Cursos>): Promise<Count>;
    find(filter?: Filter<Cursos>): Promise<Cursos[]>;
    updateAll(cursos: Cursos, where?: Where<Cursos>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cursos>): Promise<Cursos>;
    updateById(id: string, cursos: Cursos): Promise<void>;
    replaceById(id: string, cursos: Cursos): Promise<void>;
    deleteById(id: string): Promise<void>;
}
