package voxgigenergychartsapi2sdk

import (
	"github.com/voxgig-sdk/energy-charts-api2-sdk/go/core"
	"github.com/voxgig-sdk/energy-charts-api2-sdk/go/entity"
	"github.com/voxgig-sdk/energy-charts-api2-sdk/go/feature"
	_ "github.com/voxgig-sdk/energy-charts-api2-sdk/go/utility"
)

// Type aliases preserve external API.
type EnergyChartsApi2SDK = core.EnergyChartsApi2SDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type EnergyChartsApi2Entity = core.EnergyChartsApi2Entity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type EnergyChartsApi2Error = core.EnergyChartsApi2Error

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPublicPowerEntityFunc = func(client *core.EnergyChartsApi2SDK, entopts map[string]any) core.EnergyChartsApi2Entity {
		return entity.NewPublicPowerEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewEnergyChartsApi2SDK = core.NewEnergyChartsApi2SDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewEnergyChartsApi2SDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *EnergyChartsApi2SDK  { return NewEnergyChartsApi2SDK(nil) }
func Test() *EnergyChartsApi2SDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
