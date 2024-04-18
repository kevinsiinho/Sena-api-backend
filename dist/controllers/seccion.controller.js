"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeccionController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let SeccionController = class SeccionController {
    constructor(seccionRepository) {
        this.seccionRepository = seccionRepository;
    }
    async create(seccion) {
        return this.seccionRepository.create(seccion);
    }
    async count(where) {
        return this.seccionRepository.count(where);
    }
    async find(filter) {
        return this.seccionRepository.find(filter);
    }
    async updateAll(seccion, where) {
        return this.seccionRepository.updateAll(seccion, where);
    }
    async findById(id, filter) {
        return this.seccionRepository.findById(id, filter);
    }
    async updateById(id, seccion) {
        await this.seccionRepository.updateById(id, seccion);
    }
    async replaceById(id, seccion) {
        await this.seccionRepository.replaceById(id, seccion);
    }
    async deleteById(id) {
        await this.seccionRepository.deleteById(id);
    }
};
exports.SeccionController = SeccionController;
tslib_1.__decorate([
    (0, rest_1.post)('/seccions'),
    (0, rest_1.response)(200, {
        description: 'Seccion model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Seccion) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Seccion, {
                    title: 'NewSeccion',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seccions/count'),
    (0, rest_1.response)(200, {
        description: 'Seccion model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Seccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seccions'),
    (0, rest_1.response)(200, {
        description: 'Array of Seccion model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Seccion, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Seccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/seccions'),
    (0, rest_1.response)(200, {
        description: 'Seccion PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Seccion, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Seccion)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Seccion, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/seccions/{id}'),
    (0, rest_1.response)(200, {
        description: 'Seccion model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Seccion, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Seccion, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/seccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Seccion PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Seccion, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Seccion]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/seccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Seccion PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Seccion]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/seccions/{id}'),
    (0, rest_1.response)(204, {
        description: 'Seccion DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], SeccionController.prototype, "deleteById", null);
exports.SeccionController = SeccionController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.SeccionRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.SeccionRepository])
], SeccionController);
//# sourceMappingURL=seccion.controller.js.map