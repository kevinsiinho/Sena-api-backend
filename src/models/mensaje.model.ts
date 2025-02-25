import {Entity, model, property} from '@loopback/repository';

@model()
export class Mensaje extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  participantes: string[];

  @property({
    type: 'string',
    required: true,
  })
  ultimo_mensaje: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_ultimo_mensaje: string;


  constructor(data?: Partial<Mensaje>) {
    super(data);
  }
}

export interface MensajeRelations {
  // describe navigational properties here
}

export type MensajeWithRelations = Mensaje & MensajeRelations;
