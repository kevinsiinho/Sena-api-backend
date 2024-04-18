/// <reference types="node" />
import { Entity } from '@loopback/repository';
export declare class File extends Entity {
    id?: string;
    name: string;
    type: string;
    data: Buffer;
    constructor(data?: Partial<File>);
}
export interface FileRelations {
}
export type FileWithRelations = File & FileRelations;
