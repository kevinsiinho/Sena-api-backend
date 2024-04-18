import {Entity, model, property} from '@loopback/repository';

@model()
export class Contenido extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
  })
  tipo?: string;

  @property({
    type: 'boolean',
  })
  comentarios?: boolean;

  @property({
    type: 'string',
  })
  cursoId?: string;

  @property({
    type: 'string',
  })
  seccionId?: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: false,
  })
  Observaciones?: Object[];


  constructor(data?: Partial<Contenido>) {
    super(data);
  }
}

export interface ContenidoRelations {
  // describe navigational properties here
}

export type ContenidoWithRelations = Contenido & ContenidoRelations;
