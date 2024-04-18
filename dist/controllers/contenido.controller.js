"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContenidoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ContenidoController = class ContenidoController {
    constructor(contenidoRepository) {
        this.contenidoRepository = contenidoRepository;
    }
    async create(contenido) {
        return this.contenidoRepository.create(contenido);
    }
    async count(where) {
        return this.contenidoRepository.count(where);
    }
    async find(filter) {
        return this.contenidoRepository.find(filter);
    }
    async updateAll(contenido, where) {
        return this.contenidoRepository.updateAll(contenido, where);
    }
    async findById(id, filter) {
        return this.contenidoRepository.findById(id, filter);
    }
    async updateById(id, contenido) {
        await this.contenidoRepository.updateById(id, contenido);
    }
    async replaceById(id, contenido) {
        await this.contenidoRepository.replaceById(id, contenido);
    }
    async deleteById(id) {
        await this.contenidoRepository.deleteById(id);
    }
};
exports.ContenidoController = ContenidoController;
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.post)('/contenidos'),
    (0, rest_1.response)(200, {
        description: 'Contenido model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Contenido) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contenido, {
                    title: 'NewContenido',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "create", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/contenidos/count'),
    (0, rest_1.response)(200, {
        description: 'Contenido model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Contenido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "count", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/contenidos'),
    (0, rest_1.response)(200, {
        description: 'Array of Contenido model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Contenido, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Contenido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "find", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.patch)('/contenidos'),
    (0, rest_1.response)(200, {
        description: 'Contenido PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contenido, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Contenido)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Contenido, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.get)('/contenidos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Contenido model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contenido, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Contenido, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "findById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.patch)('/contenidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contenido PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Contenido, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Contenido]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.put)('/contenidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contenido PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Contenido]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, authentication_1.authenticate)('jwt'),
    (0, rest_1.del)('/contenidos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Contenido DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ContenidoController.prototype, "deleteById", null);
exports.ContenidoController = ContenidoController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ContenidoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ContenidoRepository])
], ContenidoController);
//# sourceMappingURL=contenido.controller.js.map