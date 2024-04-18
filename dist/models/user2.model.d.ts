import { Entity } from '@loopback/repository';
export declare class User2 extends Entity {
    id?: string;
    tipoid: string;
    nombres: string;
    apellidos: string;
    tipoCuenta: string;
    email: string;
    password: string;
    cursos: string[];
    constructor(data?: Partial<User2>);
}
export interface UserRelations {
}
export type UserWithRelations = User2 & UserRelations;
