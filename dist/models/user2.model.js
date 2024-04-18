"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User2 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User2 = class User2 extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.User2 = User2;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "tipoid", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "nombres", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "apellidos", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "tipoCuenta", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: false,
    }),
    tslib_1.__metadata("design:type", String)
], User2.prototype, "password", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], User2.prototype, "cursos", void 0);
exports.User2 = User2 = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], User2);
//# sourceMappingURL=user2.model.js.map