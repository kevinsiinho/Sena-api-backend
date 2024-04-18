"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificaciones = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Notificaciones = class Notificaciones extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Notificaciones = Notificaciones;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Notificaciones.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Notificaciones.prototype, "usuario", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Notificaciones.prototype, "mensaje", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    tslib_1.__metadata("design:type", Boolean)
], Notificaciones.prototype, "leido", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Notificaciones.prototype, "fecha_creacion", void 0);
exports.Notificaciones = Notificaciones = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Notificaciones);
//# sourceMappingURL=notificaciones.model.js.map