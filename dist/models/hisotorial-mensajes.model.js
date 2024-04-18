"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HisotorialMensajes = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let HisotorialMensajes = class HisotorialMensajes extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.HisotorialMensajes = HisotorialMensajes;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "mensaje_id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "emisor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "receptor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "contenido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], HisotorialMensajes.prototype, "fecha_envio", void 0);
exports.HisotorialMensajes = HisotorialMensajes = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], HisotorialMensajes);
//# sourceMappingURL=hisotorial-mensajes.model.js.map