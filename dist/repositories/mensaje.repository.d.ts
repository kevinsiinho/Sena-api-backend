import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Mensaje, MensajeRelations } from '../models';
export declare class MensajeRepository extends DefaultCrudRepository<Mensaje, typeof Mensaje.prototype.id, MensajeRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
