<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: prepare_path

class EnergyChartsApi2PreparePath
{
    public static function call(EnergyChartsApi2Context $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
