import {Entity, model, property} from '@loopback/repository';

@model()
export class HisotorialMensajes extends Entity {
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
  mensaje_id: string;

  @property({
    type: 'string',
    required: true,
  })
  emisor: string;

  @property({
    type: 'string',
    required: true,
  })
  receptor: string;

  @property({
    type: 'string',
    required: true,
  })
  contenido: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha_envio: string;


  constructor(data?: Partial<HisotorialMensajes>) {
    super(data);
  }
}

export interface HisotorialMensajesRelations {
  // describe navigational properties here
}

export type HisotorialMensajesWithRelations = HisotorialMensajes & HisotorialMensajesRelations;
