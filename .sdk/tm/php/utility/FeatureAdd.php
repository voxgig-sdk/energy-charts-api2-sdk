<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: feature_add

class EnergyChartsApi2FeatureAdd
{
    public static function call(EnergyChartsApi2Context $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
