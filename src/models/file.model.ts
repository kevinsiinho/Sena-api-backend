import {Entity, model, property} from '@loopback/repository';

@model()
export class File extends Entity {
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
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  type: string;

  @property({
    type: 'buffer',
    required: true,
  })
  data: Buffer; // Aquí almacenamos los datos binarios del archivo

  constructor(data?: Partial<File>) {
    super(data);
  }
}

export interface FileRelations {
  // Aquí puedes describir relaciones si las hay
}

export type FileWithRelations = File & FileRelations;

