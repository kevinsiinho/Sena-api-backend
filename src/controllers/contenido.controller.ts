import {authenticate} from '@loopback/authentication';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Contenido} from '../models';
import {ContenidoRepository} from '../repositories';

export class ContenidoController {
  constructor(
    @repository(ContenidoRepository)
    public contenidoRepository : ContenidoRepository,
  ) {}

  @authenticate('jwt')
  @post('/contenidos')
  @response(200, {
    description: 'Contenido model instance',
    content: {'application/json': {schema: getModelSchemaRef(Contenido)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contenido, {
            title: 'NewContenido',
            exclude: ['id'],
          }),
        },
      },
    })
    contenido: Omit<Contenido, 'id'>,
  ): Promise<Contenido> {
    return this.contenidoRepository.create(contenido);
  }

  @authenticate('jwt')
  @get('/contenidos/count')
  @response(200, {
    description: 'Contenido model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Contenido) where?: Where<Contenido>,
  ): Promise<Count> {
    return this.contenidoRepository.count(where);
  }

  @authenticate('jwt')
  @get('/contenidos')
  @response(200, {
    description: 'Array of Contenido model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Contenido, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Contenido) filter?: Filter<Contenido>,
  ): Promise<Contenido[]> {
    return this.contenidoRepository.find(filter);
  }

  @authenticate('jwt')
  @patch('/contenidos')
  @response(200, {
    description: 'Contenido PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contenido, {partial: true}),
        },
      },
    })
    contenido: Contenido,
    @param.where(Contenido) where?: Where<Contenido>,
  ): Promise<Count> {
    return this.contenidoRepository.updateAll(contenido, where);
  }

  @authenticate('jwt')
  @get('/contenidos/{id}')
  @response(200, {
    description: 'Contenido model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Contenido, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Contenido, {exclude: 'where'}) filter?: FilterExcludingWhere<Contenido>
  ): Promise<Contenido> {
    return this.contenidoRepository.findById(id, filter);
  }

  @authenticate('jwt')
  @patch('/contenidos/{id}')
  @response(204, {
    description: 'Contenido PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Contenido, {partial: true}),
        },
      },
    })
    contenido: Contenido,
  ): Promise<void> {
    await this.contenidoRepository.updateById(id, contenido);
  }

  @authenticate('jwt')
  @put('/contenidos/{id}')
  @response(204, {
    description: 'Contenido PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() contenido: Contenido,
  ): Promise<void> {
    await this.contenidoRepository.replaceById(id, contenido);
  }

  @authenticate('jwt')
  @del('/contenidos/{id}')
  @response(204, {
    description: 'Contenido DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.contenidoRepository.deleteById(id);
  }
}
