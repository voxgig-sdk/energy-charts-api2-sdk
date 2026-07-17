-- EnergyChartsApi2 SDK exists test

local sdk = require("energy-charts-api2_sdk")

describe("EnergyChartsApi2SDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
