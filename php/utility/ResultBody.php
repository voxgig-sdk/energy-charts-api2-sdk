<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility: result_body

class EnergyChartsApi2ResultBody
{
    public static function call(EnergyChartsApi2Context $ctx): ?EnergyChartsApi2Result
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
