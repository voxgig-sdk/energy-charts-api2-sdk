<?php
declare(strict_types=1);

// EnergyChartsApi2 SDK configuration

class EnergyChartsApi2Config
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "EnergyChartsApi2",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.energy-charts.info",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "public_power" => [],
                ],
            ],
            "entity" => [
        'public_power' => [
          'fields' => [
            [
              'active' => true,
              'name' => 'data',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
          ],
          'name' => 'public_power',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'de',
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'end',
                        'orig' => 'end',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'kind' => 'query',
                        'name' => 'start',
                        'orig' => 'start',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/public_power',
                  'parts' => [
                    'public_power',
                  ],
                  'select' => [
                    'exist' => [
                      'country',
                      'end',
                      'start',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'index$' => 0,
                ],
              ],
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return EnergyChartsApi2Features::make_feature($name);
    }
}
