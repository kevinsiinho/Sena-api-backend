"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contenido = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Contenido = class Contenido extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Contenido = Contenido;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "fechaCreacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "tipo", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'boolean',
    }),
    tslib_1.__metadata("design:type", Boolean)
], Contenido.prototype, "comentarios", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "cursoId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], Contenido.prototype, "seccionId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: false,
    }),
    tslib_1.__metadata("design:type", Array)
], Contenido.prototype, "Observaciones", void 0);
exports.Contenido = Contenido = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Contenido);
//# sourceMappingURL=contenido.model.js.map