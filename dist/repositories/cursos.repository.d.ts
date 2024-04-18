import { DefaultCrudRepository } from '@loopback/repository';
import { DbProyectoDataSource } from '../datasources';
import { Cursos, CursosRelations } from '../models';
export declare class CursosRepository extends DefaultCrudRepository<Cursos, typeof Cursos.prototype.id, CursosRelations> {
    constructor(dataSource: DbProyectoDataSource);
}
