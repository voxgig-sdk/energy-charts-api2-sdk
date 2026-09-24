
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EnergyChartsApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = EnergyChartsApi2SDK.test()
    equal(testsdk instanceof EnergyChartsApi2SDK, true,
      'EnergyChartsApi2SDK.test() must return a client synchronously')
  })

})
