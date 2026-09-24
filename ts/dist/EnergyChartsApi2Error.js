"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnergyChartsApi2Error = void 0;
class EnergyChartsApi2Error extends Error {
    isEnergyChartsApi2Error = true;
    sdk = 'EnergyChartsApi2';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.EnergyChartsApi2Error = EnergyChartsApi2Error;
//# sourceMappingURL=EnergyChartsApi2Error.js.map