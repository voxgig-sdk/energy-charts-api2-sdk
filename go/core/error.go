package core

type EnergyChartsApi2Error struct {
	IsEnergyChartsApi2Error bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewEnergyChartsApi2Error(code string, msg string, ctx *Context) *EnergyChartsApi2Error {
	return &EnergyChartsApi2Error{
		IsEnergyChartsApi2Error: true,
		Sdk:              "EnergyChartsApi2",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *EnergyChartsApi2Error) Error() string {
	return e.Msg
}
