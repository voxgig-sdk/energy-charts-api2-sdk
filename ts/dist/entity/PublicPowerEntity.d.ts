import { EnergyChartsApi2EntityBase } from '../EnergyChartsApi2EntityBase';
import type { EnergyChartsApi2SDK } from '../EnergyChartsApi2SDK';
import type { Control } from '../types';
import type { PublicPower, PublicPowerListMatch } from '../EnergyChartsApi2Types';
declare class PublicPowerEntity extends EnergyChartsApi2EntityBase<PublicPower> {
    constructor(client: EnergyChartsApi2SDK, entopts: any);
    make(this: PublicPowerEntity): PublicPowerEntity;
    list(this: any, reqmatch?: PublicPowerListMatch, ctrl?: Control): Promise<PublicPowerEntity[]>;
}
export { PublicPowerEntity };
