import {Entity, model, property} from '@loopback/repository';

@model()
export class Cursos extends Entity {
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
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'date',
  })
  fechaActualizacion?: string;

  @property({
    type: 'string',
    required: true,
  })
  imagen: string;

  @property({
    type: 'string',
    required: true,
  })
  creadorId: string


  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  participantes: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  secciones: string[];

  constructor(data?: Partial<Cursos>) {
    super(data);
  }
}

export interface CursosRelations {
  // describe navigational properties here
}

export type CursosWithRelations = Cursos & CursosRelations;
