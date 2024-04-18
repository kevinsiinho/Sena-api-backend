import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Evaluaciones, EvaluacionesRelations } from '../models';
export declare class EvaluacionesRepository extends DefaultCrudRepository<Evaluaciones, typeof Evaluaciones.prototype.id, EvaluacionesRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
