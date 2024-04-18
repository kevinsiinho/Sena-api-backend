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
import {Cursos} from '../models';
import {CursosRepository} from '../repositories';
export class CursosController {
  constructor(
    @repository(CursosRepository)
    public cursosRepository : CursosRepository,
  ) {}

  @authenticate('jwt')
  @post('/cursos')
  @response(200, {
    description: 'Cursos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cursos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cursos, {
            title: 'NewCursos',
            exclude: ['id'],
          }),
        },
      },
    })
    cursos: Omit<Cursos, 'id'>,
  ): Promise<Cursos> {
    return this.cursosRepository.create(cursos);
  }

  @authenticate('jwt')
  @get('/cursos/count')
  @response(200, {
    description: 'Cursos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cursos) where?: Where<Cursos>,
  ): Promise<Count> {
    return this.cursosRepository.count(where);
  }

  @authenticate('jwt')
  @get('/cursos')
  @response(200, {
    description: 'Array of Cursos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cursos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cursos) filter?: Filter<Cursos>,
  ): Promise<Cursos[]> {
    return this.cursosRepository.find(filter);
  }

  @authenticate('jwt')
  @patch('/cursos')
  @response(200, {
    description: 'Cursos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cursos, {partial: true}),
        },
      },
    })
    cursos: Cursos,
    @param.where(Cursos) where?: Where<Cursos>,
  ): Promise<Count> {
    return this.cursosRepository.updateAll(cursos, where);
  }

  @authenticate('jwt')
  @get('/cursos/{id}')
  @response(200, {
    description: 'Cursos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cursos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cursos, {exclude: 'where'}) filter?: FilterExcludingWhere<Cursos>
  ): Promise<Cursos> {
    return this.cursosRepository.findById(id, filter);
  }

  @authenticate('jwt')
  @patch('/cursos/{id}')
  @response(204, {
    description: 'Cursos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cursos, {partial: true}),
        },
      },
    })
    cursos: Cursos,
  ): Promise<void> {
    await this.cursosRepository.updateById(id, cursos);
  }

  @authenticate('jwt')
  @put('/cursos/{id}')
  @response(204, {
    description: 'Cursos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cursos: Cursos,
  ): Promise<void> {
    await this.cursosRepository.replaceById(id, cursos);
  }

  @authenticate('jwt')
  @del('/cursos/{id}')
  @response(204, {
    description: 'Cursos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cursosRepository.deleteById(id);
  }
}
