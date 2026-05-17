package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPublicPowerEntityFunc func(client *EnergyChartsApi2SDK, entopts map[string]any) EnergyChartsApi2Entity

