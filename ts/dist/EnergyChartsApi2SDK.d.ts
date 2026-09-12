import { PublicPowerEntity } from './entity/PublicPowerEntity';
export type * from './EnergyChartsApi2Types';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { EnergyChartsApi2EntityBase } from './EnergyChartsApi2EntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class EnergyChartsApi2SDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    PublicPower(entopts?: Record<string, any>): PublicPowerEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): EnergyChartsApi2SDK;
    tester(testopts?: any, sdkopts?: any): EnergyChartsApi2SDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof EnergyChartsApi2SDK;
export { stdutil, config, BaseFeature, EnergyChartsApi2EntityBase, EnergyChartsApi2SDK, SDK, };
