# ProjectName SDK exists test

import pytest
from energychartsapi2_sdk import EnergyChartsApi2SDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = EnergyChartsApi2SDK.test(None, None)
        assert testsdk is not None
