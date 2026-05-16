
import { Context } from './Context'


class EnergyChartsApi2Error extends Error {

  isEnergyChartsApi2Error = true

  sdk = 'EnergyChartsApi2'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  EnergyChartsApi2Error
}

