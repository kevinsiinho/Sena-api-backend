"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensaje = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Mensaje = class Mensaje extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Mensaje = Mensaje;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mensaje.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Mensaje.prototype, "participantes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mensaje.prototype, "ultimo_mensaje", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Mensaje.prototype, "fecha_ultimo_mensaje", void 0);
exports.Mensaje = Mensaje = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Mensaje);
//# sourceMappingURL=mensaje.model.js.map