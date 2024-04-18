"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluacionesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EvaluacionesController = class EvaluacionesController {
    constructor(evaluacionesRepository) {
        this.evaluacionesRepository = evaluacionesRepository;
    }
    async create(evaluaciones) {
        return this.evaluacionesRepository.create(evaluaciones);
    }
    async count(where) {
        return this.evaluacionesRepository.count(where);
    }
    async find(filter) {
        return this.evaluacionesRepository.find(filter);
    }
    async updateAll(evaluaciones, where) {
        return this.evaluacionesRepository.updateAll(evaluaciones, where);
    }
    async findById(id, filter) {
        return this.evaluacionesRepository.findById(id, filter);
    }
    async updateById(id, evaluaciones) {
        await this.evaluacionesRepository.updateById(id, evaluaciones);
    }
    async replaceById(id, evaluaciones) {
        await this.evaluacionesRepository.replaceById(id, evaluaciones);
    }
    async deleteById(id) {
        await this.evaluacionesRepository.deleteById(id);
    }
};
exports.EvaluacionesController = EvaluacionesController;
tslib_1.__decorate([
    (0, rest_1.post)('/evaluaciones'),
    (0, rest_1.response)(200, {
        description: 'Evaluaciones model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones, {
                    title: 'NewEvaluaciones',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/evaluaciones/count'),
    (0, rest_1.response)(200, {
        description: 'Evaluaciones model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Evaluaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/evaluaciones'),
    (0, rest_1.response)(200, {
        description: 'Array of Evaluaciones model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Evaluaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/evaluaciones'),
    (0, rest_1.response)(200, {
        description: 'Evaluaciones PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Evaluaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Evaluaciones, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/evaluaciones/{id}'),
    (0, rest_1.response)(200, {
        description: 'Evaluaciones model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Evaluaciones, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/evaluaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Evaluaciones PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Evaluaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Evaluaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/evaluaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Evaluaciones PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Evaluaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/evaluaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Evaluaciones DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EvaluacionesController.prototype, "deleteById", null);
exports.EvaluacionesController = EvaluacionesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EvaluacionesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EvaluacionesRepository])
], EvaluacionesController);
//# sourceMappingURL=evaluaciones.controller.js.map