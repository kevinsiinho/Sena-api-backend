"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FileController = class FileController {
    constructor(fileRepository) {
        this.fileRepository = fileRepository;
    }
    async createFile(file, response) {
        try {
            // Creamos una nueva instancia de File con los datos del archivo
            console.log(file);
            const newFile = new models_1.File({
                name: 'Nombre_del_archivo',
                type: 'Tipo_del_archivo',
                data: file, // Los datos del archivo son el propio buffer binario recibido
            });
            // Guardamos el archivo en la base de datos
            await this.fileRepository.create(newFile);
            // Responde con un código 200 OK si la creación fue exitosa
            response.status(200).send('Archivo creado exitosamente');
        }
        catch (error) {
            // Si ocurre algún error, responde con un código 500 Internal Server Error
            response.status(500).send('Error al crear el archivo');
        }
    }
    async getAllFiles() {
        return this.fileRepository.find();
    }
    async getFileById(id) {
        return this.fileRepository.findById(id);
    }
    async deleteFile(id) {
        await this.fileRepository.deleteById(id);
    }
};
exports.FileController = FileController;
tslib_1.__decorate([
    (0, rest_1.post)('/files', {
        responses: {
            200: {
                description: 'Archivo creado exitosamente',
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody.file()),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.RestBindings.Http.RESPONSE)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Buffer, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "createFile", null);
tslib_1.__decorate([
    (0, rest_1.get)('/files', {
        responses: {
            200: {
                description: 'Lista de archivos',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: { 'x-ts-type': models_1.File },
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "getAllFiles", null);
tslib_1.__decorate([
    (0, rest_1.get)('/files/{id}', {
        responses: {
            200: {
                description: 'Archivo encontrado',
                content: {
                    'application/json': {
                        schema: { 'x-ts-type': models_1.File },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "getFileById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/files/{id}', {
        responses: {
            204: {
                description: 'Archivo eliminado',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FileController.prototype, "deleteFile", null);
exports.FileController = FileController = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('repositories.FileRepository')),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FileRepository])
], FileController);
//# sourceMappingURL=subir-archivos.controller.js.map