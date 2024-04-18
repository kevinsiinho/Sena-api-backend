import {Entity, model, property} from '@loopback/repository';

@model()
export class Evaluaciones extends Entity {
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
    type: 'date',
    required: true,
  })
  fechaCreacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaTerminacion: string;

  @property({
    type: 'number',
    required: true,
  })
  tiempoPrueba: number;

  @property({
    type: 'number',
    required: true,
  })
  intentos: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Preguntas: object[];

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  Participantes: object[];


  constructor(data?: Partial<Evaluaciones>) {
    super(data);
  }
}

export interface EvaluacionesRelations {
  // describe navigational properties here
}

export type EvaluacionesWithRelations = Evaluaciones & EvaluacionesRelations;
