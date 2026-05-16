
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { EnergyChartsApi2SDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await EnergyChartsApi2SDK.test()
    equal(null !== testsdk, true)
  })

})
