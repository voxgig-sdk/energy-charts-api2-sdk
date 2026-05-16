# EnergyChartsApi2 SDK feature factory

from feature.base_feature import EnergyChartsApi2BaseFeature
from feature.test_feature import EnergyChartsApi2TestFeature


def _make_feature(name):
    features = {
        "base": lambda: EnergyChartsApi2BaseFeature(),
        "test": lambda: EnergyChartsApi2TestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
