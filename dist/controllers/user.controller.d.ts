import { TokenService } from '@loopback/authentication';
import { Credentials, MyUserService, User, UserCredentials, UserRepository } from '@loopback/authentication-jwt';
import { Filter, FilterExcludingWhere } from '@loopback/repository';
import { SchemaObject } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { User2 } from '../models';
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: MyUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: MyUserService, user: UserProfile, userRepository: UserRepository);
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: User2): Promise<User>;
    whoAmI2(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    credenciales(id: string): Promise<UserCredentials>;
    replaceById(id: string, user: User2): Promise<void>;
    deleteById(id: string): Promise<void>;
    updatePassword(id: string, passwordData: {
        password: string;
    }): Promise<void>;
    deleteCredentials(id: string): Promise<void>;
    search(query: string, filter?: Filter<User>): Promise<User[]>;
}
