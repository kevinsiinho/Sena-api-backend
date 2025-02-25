import {Entity, model, property} from '@loopback/repository';

@model()
export class User2 extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoid: string;


  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoCuenta: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: false,
  })
  password: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  cursos: string[];

  constructor(data?: Partial<User2>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User2 & UserRelations;
