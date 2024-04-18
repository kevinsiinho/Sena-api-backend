import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Evaluaciones } from '../models';
import { EvaluacionesRepository } from '../repositories';
export declare class EvaluacionesController {
    evaluacionesRepository: EvaluacionesRepository;
    constructor(evaluacionesRepository: EvaluacionesRepository);
    create(evaluaciones: Omit<Evaluaciones, 'id'>): Promise<Evaluaciones>;
    count(where?: Where<Evaluaciones>): Promise<Count>;
    find(filter?: Filter<Evaluaciones>): Promise<Evaluaciones[]>;
    updateAll(evaluaciones: Evaluaciones, where?: Where<Evaluaciones>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Evaluaciones>): Promise<Evaluaciones>;
    updateById(id: string, evaluaciones: Evaluaciones): Promise<void>;
    replaceById(id: string, evaluaciones: Evaluaciones): Promise<void>;
    deleteById(id: string): Promise<void>;
}
