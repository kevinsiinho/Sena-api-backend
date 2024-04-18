import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Mensaje, MensajeRelations} from '../models';

export class MensajeRepository extends DefaultCrudRepository<
  Mensaje,
  typeof Mensaje.prototype.id,
  MensajeRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Mensaje, dataSource);
  }
}
