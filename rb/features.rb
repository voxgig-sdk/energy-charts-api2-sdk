# EnergyChartsApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module EnergyChartsApi2Features
  def self.make_feature(name)
    case name
    when "base"
      EnergyChartsApi2BaseFeature.new
    when "ratelimit"
      EnergyChartsApi2RatelimitFeature.new
    when "retry"
      EnergyChartsApi2RetryFeature.new
    when "test"
      EnergyChartsApi2TestFeature.new
    when "timeout"
      EnergyChartsApi2TimeoutFeature.new
    else
      EnergyChartsApi2BaseFeature.new
    end
  end
end
