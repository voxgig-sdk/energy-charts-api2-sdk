# EnergyChartsApi2 SDK utility: make_context

from projectname_sdk.core.context import EnergyChartsApi2Context


def make_context_util(ctxmap, basectx):
    return EnergyChartsApi2Context(ctxmap, basectx)
