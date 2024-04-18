/// <reference types="node" />
/// <reference types="express" />
import { Response } from '@loopback/rest';
import { File } from '../models';
import { FileRepository } from '../repositories';
export declare class FileController {
    fileRepository: FileRepository;
    constructor(fileRepository: FileRepository);
    createFile(file: Buffer, // Utilizamos @requestBody.file() para indicar que esperamos un archivo
    response: Response): Promise<void>;
    getAllFiles(): Promise<File[]>;
    getFileById(id: string): Promise<File>;
    deleteFile(id: string): Promise<void>;
}
