

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { EnergyChartsApi2SDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('PublicPowerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when ENERGY_CHARTS_API2_TEST_LIVE=TRUE.
  afterEach(liveDelay('ENERGY_CHARTS_API2_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = EnergyChartsApi2SDK.test()
    const ent = testsdk.PublicPower()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.ENERGY_CHARTS_API2_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'public_power.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"Energy production values in MW","type":"`$ARRAY`","index$":0},{"active":true,"name":"name","req":false,"short":"Type of energy production","type":"`$STRING`","index$":1}],"name":"public_power","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"de","kind":"query","name":"country","orig":"country","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"end","orig":"end","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"start","orig":"start","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /public_power","json":"{\"operationId\":\"getPowerData\",\"parameters\":[{\"description\":\"Country code for energy data\",\"in\":\"query\",\"name\":\"country\",\"required\":false,\"schema\":{\"default\":\"de\",\"type\":\"string\"}},{\"description\":\"Start date for data retrieval (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"start\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"End date for data retrieval (YYYY-MM-DD)\",\"in\":\"query\",\"name\":\"end\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"consumption\":{\"description\":\"Energy consumption values in MW\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"production_types\":{\"items\":{\"properties\":{\"data\":{\"description\":\"Energy production values in MW\",\"items\":{\"type\":\"number\"},\"type\":\"array\"},\"name\":{\"description\":\"Type of energy production\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"unix_seconds\":{\"description\":\"Array of Unix timestamps\",\"items\":{\"type\":\"integer\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with energy data\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - invalid parameters\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/public_power","segments":[{"lit":"public_power"}],"select":{"exist":["country","end","start"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"public_power","name__orig":"public_power","Name":"PublicPower","name_":"public_power","name-":"public-power","NAME":"PUBLIC_POWER","index$":0}, {"active":true,"entity":"public_power","key$":"BasicPublicPowerFlow","kind":"basic","name":"BasicPublicPowerFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"public_power_ref01"}}],"index$":0}]}, 'PublicPower')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let public_power_ref01_data = Object.values(setup.data.existing.public_power)[0] as any

    // LIST
    const public_power_ref01_ent = client.PublicPower()
    const public_power_ref01_match: any = {}

    const public_power_ref01_list = (await public_power_ref01_ent.list(public_power_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/public_power/PublicPowerTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = EnergyChartsApi2SDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['public_power01','public_power02','public_power03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'ENERGY_CHARTS_API2_TEST_PUBLIC_POWER_ENTID': idmap,
    'ENERGY_CHARTS_API2_TEST_LIVE': 'FALSE',
    'ENERGY_CHARTS_API2_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['ENERGY_CHARTS_API2_TEST_PUBLIC_POWER_ENTID']

  const live = 'TRUE' === env.ENERGY_CHARTS_API2_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['ENERGY_CHARTS_API2_TEST_PUBLIC_POWER_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new EnergyChartsApi2SDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.ENERGY_CHARTS_API2_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
