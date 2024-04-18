import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Notificaciones, NotificacionesRelations } from '../models';
export declare class NotificacionesRepository extends DefaultCrudRepository<Notificaciones, typeof Notificaciones.prototype.id, NotificacionesRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
