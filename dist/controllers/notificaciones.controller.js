"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificacionesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let NotificacionesController = class NotificacionesController {
    constructor(notificacionesRepository) {
        this.notificacionesRepository = notificacionesRepository;
    }
    async create(notificaciones) {
        return this.notificacionesRepository.create(notificaciones);
    }
    async count(where) {
        return this.notificacionesRepository.count(where);
    }
    async find(filter) {
        return this.notificacionesRepository.find(filter);
    }
    async updateAll(notificaciones, where) {
        return this.notificacionesRepository.updateAll(notificaciones, where);
    }
    async findById(id, filter) {
        return this.notificacionesRepository.findById(id, filter);
    }
    async updateById(id, notificaciones) {
        await this.notificacionesRepository.updateById(id, notificaciones);
    }
    async replaceById(id, notificaciones) {
        await this.notificacionesRepository.replaceById(id, notificaciones);
    }
    async deleteById(id) {
        await this.notificacionesRepository.deleteById(id);
    }
};
exports.NotificacionesController = NotificacionesController;
tslib_1.__decorate([
    (0, rest_1.post)('/notificaciones'),
    (0, rest_1.response)(200, {
        description: 'Notificaciones model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones, {
                    title: 'NewNotificaciones',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notificaciones/count'),
    (0, rest_1.response)(200, {
        description: 'Notificaciones model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Notificaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notificaciones'),
    (0, rest_1.response)(200, {
        description: 'Array of Notificaciones model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Notificaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/notificaciones'),
    (0, rest_1.response)(200, {
        description: 'Notificaciones PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Notificaciones)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Notificaciones, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/notificaciones/{id}'),
    (0, rest_1.response)(200, {
        description: 'Notificaciones model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Notificaciones, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/notificaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Notificaciones PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Notificaciones, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Notificaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/notificaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Notificaciones PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Notificaciones]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/notificaciones/{id}'),
    (0, rest_1.response)(204, {
        description: 'Notificaciones DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], NotificacionesController.prototype, "deleteById", null);
exports.NotificacionesController = NotificacionesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.NotificacionesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.NotificacionesRepository])
], NotificacionesController);
//# sourceMappingURL=notificaciones.controller.js.map