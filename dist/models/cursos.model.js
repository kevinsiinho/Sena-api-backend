"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cursos = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Cursos = class Cursos extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Cursos = Cursos;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "descripcion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "estado", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "fechaCreacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "fechaActualizacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "imagen", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Cursos.prototype, "creadorId", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: false,
    }),
    tslib_1.__metadata("design:type", Array)
], Cursos.prototype, "participantes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: false,
    }),
    tslib_1.__metadata("design:type", Array)
], Cursos.prototype, "secciones", void 0);
exports.Cursos = Cursos = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cursos);
//# sourceMappingURL=cursos.model.js.map