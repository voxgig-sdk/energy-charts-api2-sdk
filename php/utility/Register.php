<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

EnergyChartsApi2Utility::setRegistrar(function (EnergyChartsApi2Utility $u): void {
    $u->clean = [EnergyChartsApi2Clean::class, 'call'];
    $u->done = [EnergyChartsApi2Done::class, 'call'];
    $u->make_error = [EnergyChartsApi2MakeError::class, 'call'];
    $u->feature_add = [EnergyChartsApi2FeatureAdd::class, 'call'];
    $u->feature_hook = [EnergyChartsApi2FeatureHook::class, 'call'];
    $u->feature_init = [EnergyChartsApi2FeatureInit::class, 'call'];
    $u->fetcher = [EnergyChartsApi2Fetcher::class, 'call'];
    $u->make_fetch_def = [EnergyChartsApi2MakeFetchDef::class, 'call'];
    $u->make_context = [EnergyChartsApi2MakeContext::class, 'call'];
    $u->make_options = [EnergyChartsApi2MakeOptions::class, 'call'];
    $u->make_request = [EnergyChartsApi2MakeRequest::class, 'call'];
    $u->make_response = [EnergyChartsApi2MakeResponse::class, 'call'];
    $u->make_result = [EnergyChartsApi2MakeResult::class, 'call'];
    $u->make_point = [EnergyChartsApi2MakePoint::class, 'call'];
    $u->make_spec = [EnergyChartsApi2MakeSpec::class, 'call'];
    $u->make_url = [EnergyChartsApi2MakeUrl::class, 'call'];
    $u->param = [EnergyChartsApi2Param::class, 'call'];
    $u->prepare_auth = [EnergyChartsApi2PrepareAuth::class, 'call'];
    $u->prepare_body = [EnergyChartsApi2PrepareBody::class, 'call'];
    $u->prepare_headers = [EnergyChartsApi2PrepareHeaders::class, 'call'];
    $u->prepare_method = [EnergyChartsApi2PrepareMethod::class, 'call'];
    $u->prepare_params = [EnergyChartsApi2PrepareParams::class, 'call'];
    $u->prepare_path = [EnergyChartsApi2PreparePath::class, 'call'];
    $u->prepare_query = [EnergyChartsApi2PrepareQuery::class, 'call'];
    $u->result_basic = [EnergyChartsApi2ResultBasic::class, 'call'];
    $u->result_body = [EnergyChartsApi2ResultBody::class, 'call'];
    $u->result_headers = [EnergyChartsApi2ResultHeaders::class, 'call'];
    $u->transform_request = [EnergyChartsApi2TransformRequest::class, 'call'];
    $u->transform_response = [EnergyChartsApi2TransformResponse::class, 'call'];
});
