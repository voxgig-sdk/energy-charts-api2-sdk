<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK base feature

class EnergyChartsApi2BaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(EnergyChartsApi2Context $ctx, array $options): void {}
    public function PostConstruct(EnergyChartsApi2Context $ctx): void {}
    public function PostConstructEntity(EnergyChartsApi2Context $ctx): void {}
    public function SetData(EnergyChartsApi2Context $ctx): void {}
    public function GetData(EnergyChartsApi2Context $ctx): void {}
    public function GetMatch(EnergyChartsApi2Context $ctx): void {}
    public function SetMatch(EnergyChartsApi2Context $ctx): void {}
    public function PrePoint(EnergyChartsApi2Context $ctx): void {}
    public function PreSpec(EnergyChartsApi2Context $ctx): void {}
    public function PreRequest(EnergyChartsApi2Context $ctx): void {}
    public function PreResponse(EnergyChartsApi2Context $ctx): void {}
    public function PreResult(EnergyChartsApi2Context $ctx): void {}
    public function PreDone(EnergyChartsApi2Context $ctx): void {}
    public function PreUnexpected(EnergyChartsApi2Context $ctx): void {}
}
