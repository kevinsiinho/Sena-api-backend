"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorailMensajesController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HistorailMensajesController = class HistorailMensajesController {
    constructor(hisotorialMensajesRepository) {
        this.hisotorialMensajesRepository = hisotorialMensajesRepository;
    }
    async create(hisotorialMensajes) {
        return this.hisotorialMensajesRepository.create(hisotorialMensajes);
    }
    async count(where) {
        return this.hisotorialMensajesRepository.count(where);
    }
    async find(filter) {
        return this.hisotorialMensajesRepository.find(filter);
    }
    async updateAll(hisotorialMensajes, where) {
        return this.hisotorialMensajesRepository.updateAll(hisotorialMensajes, where);
    }
    async findById(id, filter) {
        return this.hisotorialMensajesRepository.findById(id, filter);
    }
    async updateById(id, hisotorialMensajes) {
        await this.hisotorialMensajesRepository.updateById(id, hisotorialMensajes);
    }
    async replaceById(id, hisotorialMensajes) {
        await this.hisotorialMensajesRepository.replaceById(id, hisotorialMensajes);
    }
    async deleteById(id) {
        await this.hisotorialMensajesRepository.deleteById(id);
    }
};
exports.HistorailMensajesController = HistorailMensajesController;
tslib_1.__decorate([
    (0, rest_1.post)('/hisotorial-mensajes'),
    (0, rest_1.response)(200, {
        description: 'HisotorialMensajes model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes, {
                    title: 'NewHisotorialMensajes',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/hisotorial-mensajes/count'),
    (0, rest_1.response)(200, {
        description: 'HisotorialMensajes model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.HisotorialMensajes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/hisotorial-mensajes'),
    (0, rest_1.response)(200, {
        description: 'Array of HisotorialMensajes model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.HisotorialMensajes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/hisotorial-mensajes'),
    (0, rest_1.response)(200, {
        description: 'HisotorialMensajes PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.HisotorialMensajes)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.HisotorialMensajes, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/hisotorial-mensajes/{id}'),
    (0, rest_1.response)(200, {
        description: 'HisotorialMensajes model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.HisotorialMensajes, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/hisotorial-mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'HisotorialMensajes PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.HisotorialMensajes, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.HisotorialMensajes]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/hisotorial-mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'HisotorialMensajes PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.HisotorialMensajes]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/hisotorial-mensajes/{id}'),
    (0, rest_1.response)(204, {
        description: 'HisotorialMensajes DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], HistorailMensajesController.prototype, "deleteById", null);
exports.HistorailMensajesController = HistorailMensajesController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HisotorialMensajesRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HisotorialMensajesRepository])
], HistorailMensajesController);
//# sourceMappingURL=historail-mensajes.controller.js.map