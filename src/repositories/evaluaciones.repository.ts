import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Evaluaciones, EvaluacionesRelations} from '../models';

export class EvaluacionesRepository extends DefaultCrudRepository<
  Evaluaciones,
  typeof Evaluaciones.prototype.id,
  EvaluacionesRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Evaluaciones, dataSource);
  }
}
