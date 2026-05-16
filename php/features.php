<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class EnergyChartsApi2Features
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new EnergyChartsApi2BaseFeature();
            case "test":
                return new EnergyChartsApi2TestFeature();
            default:
                return new EnergyChartsApi2BaseFeature();
        }
    }
}
