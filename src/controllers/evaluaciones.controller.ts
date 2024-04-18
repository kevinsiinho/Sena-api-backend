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
import {Evaluaciones} from '../models';
import {EvaluacionesRepository} from '../repositories';

export class EvaluacionesController {
  constructor(
    @repository(EvaluacionesRepository)
    public evaluacionesRepository : EvaluacionesRepository,
  ) {}

  @post('/evaluaciones')
  @response(200, {
    description: 'Evaluaciones model instance',
    content: {'application/json': {schema: getModelSchemaRef(Evaluaciones)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evaluaciones, {
            title: 'NewEvaluaciones',
            exclude: ['id'],
          }),
        },
      },
    })
    evaluaciones: Omit<Evaluaciones, 'id'>,
  ): Promise<Evaluaciones> {
    return this.evaluacionesRepository.create(evaluaciones);
  }

  @get('/evaluaciones/count')
  @response(200, {
    description: 'Evaluaciones model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Evaluaciones) where?: Where<Evaluaciones>,
  ): Promise<Count> {
    return this.evaluacionesRepository.count(where);
  }

  @get('/evaluaciones')
  @response(200, {
    description: 'Array of Evaluaciones model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Evaluaciones, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Evaluaciones) filter?: Filter<Evaluaciones>,
  ): Promise<Evaluaciones[]> {
    return this.evaluacionesRepository.find(filter);
  }

  @patch('/evaluaciones')
  @response(200, {
    description: 'Evaluaciones PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evaluaciones, {partial: true}),
        },
      },
    })
    evaluaciones: Evaluaciones,
    @param.where(Evaluaciones) where?: Where<Evaluaciones>,
  ): Promise<Count> {
    return this.evaluacionesRepository.updateAll(evaluaciones, where);
  }

  @get('/evaluaciones/{id}')
  @response(200, {
    description: 'Evaluaciones model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Evaluaciones, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Evaluaciones, {exclude: 'where'}) filter?: FilterExcludingWhere<Evaluaciones>
  ): Promise<Evaluaciones> {
    return this.evaluacionesRepository.findById(id, filter);
  }

  @patch('/evaluaciones/{id}')
  @response(204, {
    description: 'Evaluaciones PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Evaluaciones, {partial: true}),
        },
      },
    })
    evaluaciones: Evaluaciones,
  ): Promise<void> {
    await this.evaluacionesRepository.updateById(id, evaluaciones);
  }

  @put('/evaluaciones/{id}')
  @response(204, {
    description: 'Evaluaciones PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() evaluaciones: Evaluaciones,
  ): Promise<void> {
    await this.evaluacionesRepository.replaceById(id, evaluaciones);
  }

  @del('/evaluaciones/{id}')
  @response(204, {
    description: 'Evaluaciones DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.evaluacionesRepository.deleteById(id);
  }
}
