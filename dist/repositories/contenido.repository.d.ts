import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Contenido, ContenidoRelations } from '../models';
export declare class ContenidoRepository extends DefaultCrudRepository<Contenido, typeof Contenido.prototype.id, ContenidoRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
