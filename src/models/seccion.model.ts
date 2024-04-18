import {Entity, model, property} from '@loopback/repository';

@model()
export class Seccion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  posicion: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion?: string;

  @property({
    type: 'date',
  })
  fechaActualizacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  cursoId: string;

  constructor(data?: Partial<Seccion>) {
    super(data);
  }
}

export interface SeccionRelations {
  // describe navigational properties here
}

export type SeccionWithRelations = Seccion & SeccionRelations;
