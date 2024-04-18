import {Entity, model, property} from '@loopback/repository';

@model()
export class Notificaciones extends Entity {
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
  usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  @property({
    type: 'boolean',
    required: true,
  })
  leido: boolean;

  @property({
    type: 'date',
    required: true,
  })
  fecha_creacion: string;


  constructor(data?: Partial<Notificaciones>) {
    super(data);
  }
}

export interface NotificacionesRelations {
  // describe navigational properties here
}

export type NotificacionesWithRelations = Notificaciones & NotificacionesRelations;
