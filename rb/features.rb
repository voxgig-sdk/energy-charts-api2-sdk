# EnergyChartsApi2 SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module EnergyChartsApi2Features
  def self.make_feature(name)
    case name
    when "base"
      EnergyChartsApi2BaseFeature.new
    when "test"
      EnergyChartsApi2TestFeature.new
    else
      EnergyChartsApi2BaseFeature.new
    end
  end
end
