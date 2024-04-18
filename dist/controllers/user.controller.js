"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = exports.CredentialsRequestBody = void 0;
const tslib_1 = require("tslib");
// import {inject} from '@loopback/core';
// Copyright IBM Corp. and LoopBack contributors 2020. All Rights Reserved.
// Node module: @loopback/example-todo-jwt
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
const authentication_1 = require("@loopback/authentication");
const authentication_jwt_1 = require("@loopback/authentication-jwt");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const security_1 = require("@loopback/security");
const bcryptjs_1 = require("bcryptjs");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const models_1 = require("../models");
const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
        email: {
            type: 'string',
            format: 'email',
        },
        password: {
            type: 'string',
            minLength: 5,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
let UserController = class UserController {
    constructor(jwtService, userService, user, userRepository) {
        this.jwtService = jwtService;
        this.userService = userService;
        this.user = user;
        this.userRepository = userRepository;
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
    async whoAmI(currentUserProfile) {
        return currentUserProfile[security_1.securityId];
    }
    async signUp(newUserRequest) {
        const password = await (0, bcryptjs_1.hash)(newUserRequest.password, await (0, bcryptjs_1.genSalt)());
        const savedUser = await this.userRepository.create(lodash_1.default.omit(newUserRequest, 'password'));
        await this.userRepository.userCredentials(savedUser.id).create({ password });
        return savedUser;
    }
    async whoAmI2(id, filter) {
        return this.userRepository.findById(id, filter);
    }
    async credenciales(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new rest_1.HttpErrors.NotFound('User not found');
        }
        const userCredentials = await this.userRepository.userCredentials(user.id).get();
        if (!userCredentials) {
            throw new rest_1.HttpErrors.NotFound('User credentials not found');
        }
        return userCredentials;
    }
    async replaceById(id, user) {
        await this.userRepository.replaceById(id, user);
    }
    async deleteById(id) {
        await this.userRepository.deleteById(id);
    }
    async updatePassword(id, passwordData) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new rest_1.HttpErrors.NotFound('User not found');
        }
        const userCredentials = await this.userRepository.userCredentials(user.id).get();
        if (!userCredentials) {
            throw new rest_1.HttpErrors.NotFound('User credentials not found');
        }
        userCredentials.password = await (0, bcryptjs_1.hash)(passwordData.password, await (0, bcryptjs_1.genSalt)());
        await this.userRepository.userCredentials(user.id).patch(userCredentials);
    }
    async deleteCredentials(id) {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new rest_1.HttpErrors.NotFound('User not found');
        }
        const userCredentials = await this.userRepository.userCredentials(user.id).get();
        if (!userCredentials) {
            throw new rest_1.HttpErrors.NotFound('User credentials not found');
        }
        await this.userRepository.userCredentials(user.id).delete();
    }
    async search(query, filter) {
        const where = {
            or: [
                { name: { like: query, options: 'i' } },
                { email: { like: query, options: 'i' } },
                { nickname: { like: query, options: 'i' } },
            ],
        };
        return this.userRepository.find({ where, ...filter });
    }
};
exports.UserController = UserController;
tslib_1.__decorate([
    (0, rest_1.post)('/users/login', {
        responses: {
            '200': {
                description: 'Token',
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                token: {
                                    type: 'string',
                                },
                            },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)(exports.CredentialsRequestBody)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/whoAmI', {
        responses: {
            '200': {
                description: 'Return current user',
                content: {
                    'application/json': {
                        schema: {
                            type: 'string',
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "whoAmI", null);
tslib_1.__decorate([
    (0, rest_1.post)('/signup', {
        responses: {
            '200': {
                description: 'User',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.User2,
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.User2, {
                    title: 'NewUser',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.User2]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/whoAmI{id}', {
        responses: {
            '200': {
                description: 'Return current user',
                content: {
                    'application/json': {
                        schema: {
                            schema: (0, rest_1.getModelSchemaRef)(authentication_jwt_1.User, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, core_1.inject)(security_1.SecurityBindings.USER)),
    tslib_1.__param(1, rest_1.param.filter(authentication_jwt_1.User, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "whoAmI2", null);
tslib_1.__decorate([
    (0, rest_1.get)('/credenciales/{id}', {
        responses: {
            '200': {
                description: 'Return current credenciales',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(authentication_jwt_1.UserCredentials, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "credenciales", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.put)('/user/{id}'),
    (0, rest_1.response)(204, {
        description: 'Item PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.User2]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.del)('/user/{id}'),
    (0, rest_1.response)(204, {
        description: 'Item DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/user/{id}/password', {
        responses: {
            '204': {
                description: 'User password updated successfully',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        password: { type: 'string' },
                    },
                    required: ['password'],
                },
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.del)('user/credenciales/{id}', {
        responses: {
            '204': {
                description: 'User credentials deleted successfully',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "deleteCredentials", null);
tslib_1.__decorate([
    (0, rest_1.get)('/users/search', {
        responses: {
            '200': {
                description: 'Array of User model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: (0, rest_1.getModelSchemaRef)(authentication_jwt_1.User, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.query.string('query')),
    tslib_1.__param(1, rest_1.param.query.object('filter', (0, rest_1.getFilterSchemaFor)(authentication_jwt_1.User))),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], UserController.prototype, "search", null);
exports.UserController = UserController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(authentication_jwt_1.TokenServiceBindings.TOKEN_SERVICE)),
    tslib_1.__param(1, (0, core_1.inject)(authentication_jwt_1.UserServiceBindings.USER_SERVICE)),
    tslib_1.__param(2, (0, core_1.inject)(security_1.SecurityBindings.USER, { optional: true })),
    tslib_1.__param(3, (0, repository_1.repository)(authentication_jwt_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [Object, authentication_jwt_1.MyUserService, Object, authentication_jwt_1.UserRepository])
], UserController);
//# sourceMappingURL=user.controller.js.map