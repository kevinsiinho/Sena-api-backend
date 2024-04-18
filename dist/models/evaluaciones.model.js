"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluaciones = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Evaluaciones = class Evaluaciones extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Evaluaciones = Evaluaciones;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Evaluaciones.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Evaluaciones.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Evaluaciones.prototype, "fechaCreacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Evaluaciones.prototype, "fechaTerminacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Evaluaciones.prototype, "tiempoPrueba", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Evaluaciones.prototype, "intentos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Evaluaciones.prototype, "Preguntas", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Evaluaciones.prototype, "Participantes", void 0);
exports.Evaluaciones = Evaluaciones = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Evaluaciones);
//# sourceMappingURL=evaluaciones.model.js.map