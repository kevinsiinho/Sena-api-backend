"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbProyectoDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'dbProyecto',
    connector: 'mongodb',
    url: 'mongodb://localhost:27017/dbProyecto',
    useNewUrlParser: true,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let DbProyectoDataSource = class DbProyectoDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.DbProyectoDataSource = DbProyectoDataSource;
DbProyectoDataSource.dataSourceName = 'dbProyecto';
DbProyectoDataSource.defaultConfig = config;
exports.DbProyectoDataSource = DbProyectoDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.dbProyecto', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbProyectoDataSource);
//# sourceMappingURL=db.datasource.js.map