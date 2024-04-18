"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seccion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Seccion = class Seccion extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Seccion = Seccion;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Seccion.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Seccion.prototype, "nombre", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Seccion.prototype, "posicion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Seccion.prototype, "fechaCreacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
    }),
    tslib_1.__metadata("design:type", String)
], Seccion.prototype, "fechaActualizacion", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Seccion.prototype, "cursoId", void 0);
exports.Seccion = Seccion = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Seccion);
//# sourceMappingURL=seccion.model.js.map