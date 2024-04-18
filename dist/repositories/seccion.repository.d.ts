import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Seccion, SeccionRelations } from '../models';
export declare class SeccionRepository extends DefaultCrudRepository<Seccion, typeof Seccion.prototype.id, SeccionRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
