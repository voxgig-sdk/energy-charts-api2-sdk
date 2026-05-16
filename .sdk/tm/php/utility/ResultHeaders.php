<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: result_headers

class EnergyChartsApi2ResultHeaders
{
    public static function call(EnergyChartsApi2Context $ctx): ?EnergyChartsApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
