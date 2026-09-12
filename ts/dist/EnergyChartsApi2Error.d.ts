import { Context } from './Context';
declare class EnergyChartsApi2Error extends Error {
    isEnergyChartsApi2Error: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { EnergyChartsApi2Error };
