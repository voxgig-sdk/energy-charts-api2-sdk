# EnergyChartsApi2 SDK utility: feature_add
module EnergyChartsApi2Utilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
