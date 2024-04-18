import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {Contenido, ContenidoRelations} from '../models';

export class ContenidoRepository extends DefaultCrudRepository<
  Contenido,
  typeof Contenido.prototype.id,
  ContenidoRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(Contenido, dataSource);
  }
}
