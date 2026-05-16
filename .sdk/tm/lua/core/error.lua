-- EnergyChartsApi2 SDK error

local EnergyChartsApi2Error = {}
EnergyChartsApi2Error.__index = EnergyChartsApi2Error


function EnergyChartsApi2Error.new(code, msg, ctx)
  local self = setmetatable({}, EnergyChartsApi2Error)
  self.is_sdk_error = true
  self.sdk = "EnergyChartsApi2"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function EnergyChartsApi2Error:error()
  return self.msg
end


function EnergyChartsApi2Error:__tostring()
  return self.msg
end


return EnergyChartsApi2Error
