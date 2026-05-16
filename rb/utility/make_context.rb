# EnergyChartsApi2 SDK utility: make_context
require_relative '../core/context'
module EnergyChartsApi2Utilities
  MakeContext = ->(ctxmap, basectx) {
    EnergyChartsApi2Context.new(ctxmap, basectx)
  }
end
