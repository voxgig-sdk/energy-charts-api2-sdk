# EnergyChartsApi2 SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

EnergyChartsApi2Utility.registrar = ->(u) {
  u.clean = EnergyChartsApi2Utilities::Clean
  u.done = EnergyChartsApi2Utilities::Done
  u.make_error = EnergyChartsApi2Utilities::MakeError
  u.feature_add = EnergyChartsApi2Utilities::FeatureAdd
  u.feature_hook = EnergyChartsApi2Utilities::FeatureHook
  u.feature_init = EnergyChartsApi2Utilities::FeatureInit
  u.fetcher = EnergyChartsApi2Utilities::Fetcher
  u.make_fetch_def = EnergyChartsApi2Utilities::MakeFetchDef
  u.make_context = EnergyChartsApi2Utilities::MakeContext
  u.make_options = EnergyChartsApi2Utilities::MakeOptions
  u.make_request = EnergyChartsApi2Utilities::MakeRequest
  u.make_response = EnergyChartsApi2Utilities::MakeResponse
  u.make_result = EnergyChartsApi2Utilities::MakeResult
  u.make_point = EnergyChartsApi2Utilities::MakePoint
  u.make_spec = EnergyChartsApi2Utilities::MakeSpec
  u.make_url = EnergyChartsApi2Utilities::MakeUrl
  u.param = EnergyChartsApi2Utilities::Param
  u.prepare_auth = EnergyChartsApi2Utilities::PrepareAuth
  u.prepare_body = EnergyChartsApi2Utilities::PrepareBody
  u.prepare_headers = EnergyChartsApi2Utilities::PrepareHeaders
  u.prepare_method = EnergyChartsApi2Utilities::PrepareMethod
  u.prepare_params = EnergyChartsApi2Utilities::PrepareParams
  u.prepare_path = EnergyChartsApi2Utilities::PreparePath
  u.prepare_query = EnergyChartsApi2Utilities::PrepareQuery
  u.result_basic = EnergyChartsApi2Utilities::ResultBasic
  u.result_body = EnergyChartsApi2Utilities::ResultBody
  u.result_headers = EnergyChartsApi2Utilities::ResultHeaders
  u.transform_request = EnergyChartsApi2Utilities::TransformRequest
  u.transform_response = EnergyChartsApi2Utilities::TransformResponse
}
