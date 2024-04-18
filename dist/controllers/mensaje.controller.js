"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let MensajeController = class MensajeController {
    constructor(mensajeRepository) {
        this.mensajeRepository = mensajeRepository;
    }
    async create(mensaje) {
        return this.mensajeRepository.create(mensaje);
    }
    async count(where) {
        return this.mensajeRepository.count(where);
    }
    async find(filter) {
        return this.mensajeRepository.find(filter);
    }
    async updateAll(mensaje, where) {
        return this.mensajeRepository.updateAll(mensaje, where);
    }
    async findById(id, filter) {
        return this.mensajeRepository.findById(id, filter);
    }
    async updateById(id, mensaje) {
        await this.mensajeRepository.updateById(id, mensaje);
    }
    async replaceById(id, mensaje) {
        await this.mensajeRepository.replaceById(id, mensaje);
    }
    async deleteById(id) {
        await this.mensajeRepository.deleteById(id);
    }
};
exports.MensajeController = MensajeController;
tslib_1.__decorate([
    (0, rest_1.post)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, {
                    title: 'NewMensaje',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mensajes/count'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Mensaje)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Array of Mensaje model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Mensaje)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/mensajes'),
    (0, rest_1.response)(200, {
        description: 'Mensaje PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Mensaje)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Mensaje, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/mensajes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Mensaje model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Mensaje, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Mensaje, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Mensaje]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Mensaje]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Mensaje DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], MensajeController.prototype, "deleteById", null);
exports.MensajeController = MensajeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.MensajeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.MensajeRepository])
], MensajeController);
//# sourceMappingURL=mensaje.controller.js.map