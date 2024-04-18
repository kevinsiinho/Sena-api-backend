import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {HisotorialMensajes} from '../models';
import {HisotorialMensajesRepository} from '../repositories';

export class HistorailMensajesController {
  constructor(
    @repository(HisotorialMensajesRepository)
    public hisotorialMensajesRepository : HisotorialMensajesRepository,
  ) {}

  @post('/hisotorial-mensajes')
  @response(200, {
    description: 'HisotorialMensajes model instance',
    content: {'application/json': {schema: getModelSchemaRef(HisotorialMensajes)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HisotorialMensajes, {
            title: 'NewHisotorialMensajes',
            exclude: ['id'],
          }),
        },
      },
    })
    hisotorialMensajes: Omit<HisotorialMensajes, 'id'>,
  ): Promise<HisotorialMensajes> {
    return this.hisotorialMensajesRepository.create(hisotorialMensajes);
  }

  @get('/hisotorial-mensajes/count')
  @response(200, {
    description: 'HisotorialMensajes model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(HisotorialMensajes) where?: Where<HisotorialMensajes>,
  ): Promise<Count> {
    return this.hisotorialMensajesRepository.count(where);
  }

  @get('/hisotorial-mensajes')
  @response(200, {
    description: 'Array of HisotorialMensajes model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(HisotorialMensajes, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(HisotorialMensajes) filter?: Filter<HisotorialMensajes>,
  ): Promise<HisotorialMensajes[]> {
    return this.hisotorialMensajesRepository.find(filter);
  }

  @patch('/hisotorial-mensajes')
  @response(200, {
    description: 'HisotorialMensajes PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HisotorialMensajes, {partial: true}),
        },
      },
    })
    hisotorialMensajes: HisotorialMensajes,
    @param.where(HisotorialMensajes) where?: Where<HisotorialMensajes>,
  ): Promise<Count> {
    return this.hisotorialMensajesRepository.updateAll(hisotorialMensajes, where);
  }

  @get('/hisotorial-mensajes/{id}')
  @response(200, {
    description: 'HisotorialMensajes model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(HisotorialMensajes, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(HisotorialMensajes, {exclude: 'where'}) filter?: FilterExcludingWhere<HisotorialMensajes>
  ): Promise<HisotorialMensajes> {
    return this.hisotorialMensajesRepository.findById(id, filter);
  }

  @patch('/hisotorial-mensajes/{id}')
  @response(204, {
    description: 'HisotorialMensajes PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HisotorialMensajes, {partial: true}),
        },
      },
    })
    hisotorialMensajes: HisotorialMensajes,
  ): Promise<void> {
    await this.hisotorialMensajesRepository.updateById(id, hisotorialMensajes);
  }

  @put('/hisotorial-mensajes/{id}')
  @response(204, {
    description: 'HisotorialMensajes PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hisotorialMensajes: HisotorialMensajes,
  ): Promise<void> {
    await this.hisotorialMensajesRepository.replaceById(id, hisotorialMensajes);
  }

  @del('/hisotorial-mensajes/{id}')
  @response(204, {
    description: 'HisotorialMensajes DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hisotorialMensajesRepository.deleteById(id);
  }
}
