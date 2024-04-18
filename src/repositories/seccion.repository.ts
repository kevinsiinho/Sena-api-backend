import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Seccion, SeccionRelations} from '../models';

export class SeccionRepository extends DefaultCrudRepository<
  Seccion,
  typeof Seccion.prototype.id,
  SeccionRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Seccion, dataSource);
  }
}
