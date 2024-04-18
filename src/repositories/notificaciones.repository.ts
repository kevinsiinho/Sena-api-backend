import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Notificaciones, NotificacionesRelations} from '../models';

export class NotificacionesRepository extends DefaultCrudRepository<
  Notificaciones,
  typeof Notificaciones.prototype.id,
  NotificacionesRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Notificaciones, dataSource);
  }
}
