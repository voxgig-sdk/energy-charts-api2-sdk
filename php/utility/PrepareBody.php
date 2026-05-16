<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: prepare_body

class EnergyChartsApi2PrepareBody
{
    public static function call(EnergyChartsApi2Context $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
