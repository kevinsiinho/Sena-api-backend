import {inject} from '@loopback/core';
import {Response, RestBindings, del, get, param, post, requestBody} from '@loopback/rest';
import {File} from '../models';
import {FileRepository} from '../repositories';

export class FileController {
  constructor(
    @inject('repositories.FileRepository')
    public fileRepository: FileRepository,
  ) {}

  @post('/files', {
    responses: {
      200: {
        description: 'Archivo creado exitosamente',
      },
    },
  })
  async createFile(
    @requestBody.file() file: Buffer, // Utilizamos @requestBody.file() para indicar que esperamos un archivo
    @inject(RestBindings.Http.RESPONSE) response: Response,
  ): Promise<void> {
    try {
      // Creamos una nueva instancia de File con los datos del archivo
      console.log(file)
      const newFile = new File({
        name: 'Nombre_del_archivo', // Ajusta el nombre del archivo según sea necesario
        type: 'Tipo_del_archivo', // Ajusta el tipo del archivo según sea necesario
        data: file, // Los datos del archivo son el propio buffer binario recibido
      });

      // Guardamos el archivo en la base de datos
      await this.fileRepository.create(newFile);

      // Responde con un código 200 OK si la creación fue exitosa
      response.status(200).send('Archivo creado exitosamente');
    } catch (error) {
      // Si ocurre algún error, responde con un código 500 Internal Server Error
      response.status(500).send('Error al crear el archivo');
    }
  }

  @get('/files', {
    responses: {
      200: {
        description: 'Lista de archivos',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {'x-ts-type': File},
            },
          },
        },
      },
    },
  })
  async getAllFiles(): Promise<File[]> {
    return this.fileRepository.find();
  }

  @get('/files/{id}', {
    responses: {
      200: {
        description: 'Archivo encontrado',
        content: {
          'application/json': {
            schema: {'x-ts-type': File},
          },
        },
      },
    },
  })
  async getFileById(@param.path.string('id') id: string): Promise<File> {
    return this.fileRepository.findById(id);
  }

  @del('/files/{id}', {
    responses: {
      204: {
        description: 'Archivo eliminado',
      },
    },
  })
  async deleteFile(@param.path.string('id') id: string): Promise<void> {
    await this.fileRepository.deleteById(id);
  }
}
