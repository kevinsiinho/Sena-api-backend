"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CursosController = class CursosController {
    constructor(cursosRepository) {
        this.cursosRepository = cursosRepository;
    }
    async create(cursos) {
        return this.cursosRepository.create(cursos);
    }
    async count(where) {
        return this.cursosRepository.count(where);
    }
    async find(filter) {
        return this.cursosRepository.find(filter);
    }
    async updateAll(cursos, where) {
        return this.cursosRepository.updateAll(cursos, where);
    }
    async findById(id, filter) {
        return this.cursosRepository.findById(id, filter);
    }
    async updateById(id, cursos) {
        await this.cursosRepository.updateById(id, cursos);
    }
    async replaceById(id, cursos) {
        await this.cursosRepository.replaceById(id, cursos);
    }
    async deleteById(id) {
        await this.cursosRepository.deleteById(id);
    }
};
exports.CursosController = CursosController;
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.post)('/cursos'),
    (0, rest_1.response)(200, {
        description: 'Cursos model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Cursos) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cursos, {
                    title: 'NewCursos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "create", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/cursos/count'),
    (0, rest_1.response)(200, {
        description: 'Cursos model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cursos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "count", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/cursos'),
    (0, rest_1.response)(200, {
        description: 'Array of Cursos model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Cursos, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cursos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "find", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.patch)('/cursos'),
    (0, rest_1.response)(200, {
        description: 'Cursos PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cursos, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cursos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cursos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/cursos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Cursos model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cursos, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cursos, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "findById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.patch)('/cursos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cursos PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Cursos, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cursos]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.put)('/cursos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cursos PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Cursos]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.del)('/cursos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Cursos DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], CursosController.prototype, "deleteById", null);
exports.CursosController = CursosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CursosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CursosRepository])
], CursosController);
//# sourceMappingURL=cursos.controller.js.map