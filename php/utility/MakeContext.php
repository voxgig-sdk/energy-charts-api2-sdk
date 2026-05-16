<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class EnergyChartsApi2MakeContext
{
    public static function call(array $ctxmap, ?EnergyChartsApi2Context $basectx): EnergyChartsApi2Context
    {
        return new EnergyChartsApi2Context($ctxmap, $basectx);
    }
}
