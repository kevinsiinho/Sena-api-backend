import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbProyectoDataSource} from '../datasources';
import {HisotorialMensajes, HisotorialMensajesRelations} from '../models';

export class HisotorialMensajesRepository extends DefaultCrudRepository<
  HisotorialMensajes,
  typeof HisotorialMensajes.prototype.id,
  HisotorialMensajesRelations
> {
  constructor(
    @inject('datasources.dbProyecto') dataSource: DbProyectoDataSource,
  ) {
    super(HisotorialMensajes, dataSource);
  }
}
