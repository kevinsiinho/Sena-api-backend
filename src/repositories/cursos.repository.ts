import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Cursos, CursosRelations} from '../models';

export class CursosRepository extends DefaultCrudRepository<
  Cursos,
  typeof Cursos.prototype.id,
  CursosRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Cursos, dataSource);
  }
}
