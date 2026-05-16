<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: prepare_headers

class EnergyChartsApi2PrepareHeaders
{
    public static function call(EnergyChartsApi2Context $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
