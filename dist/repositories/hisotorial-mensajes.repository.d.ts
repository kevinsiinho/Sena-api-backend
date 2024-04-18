import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { HisotorialMensajes, HisotorialMensajesRelations } from '../models';
export declare class HisotorialMensajesRepository extends DefaultCrudRepository<HisotorialMensajes, typeof HisotorialMensajes.prototype.id, HisotorialMensajesRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
