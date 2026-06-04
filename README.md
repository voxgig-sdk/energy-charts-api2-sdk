# EnergyChartsApi2 SDK

Open electricity generation, price, and renewable-share data for Germany and other European countries

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Energy-Charts API

The [Energy-Charts API](https://api.energy-charts.info/) is the public data backend for [energy-charts.info](https://energy-charts.info/), a project run by the [Fraunhofer Institute for Solar Energy Systems ISE](https://www.ise.fraunhofer.de/) in Freiburg, Germany. It exposes the same electricity-market and generation time series that power the Energy-Charts web visualisations, with a focus on the German grid and broader European context.

What you can query:

- Public net electricity production broken down by generation type (solar, wind onshore/offshore, nuclear, gas, coal, biomass, hydro, etc.) per country.
- Generation forecasts and total/installed capacity figures.
- Day-ahead wholesale electricity prices and cross-border physical flows.
- Grid frequency and renewable-share signals, plus daily renewable / solar / wind share averages.

This SDK wraps the `/public_power` endpoint, which returns unix-timestamped arrays of MW values keyed by production type. Most endpoints accept a `country` code (default `de`) and optional `start` / `end` ISO timestamps. The API is open and does not require an API key; please cite Fraunhofer ISE when republishing.

## Try it

**TypeScript**
```bash
npm install energy-charts-api2
```

**Python**
```bash
pip install energy-charts-api2-sdk
```

**PHP**
```bash
composer require voxgig/energy-charts-api2-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/energy-charts-api2-sdk/go
```

**Ruby**
```bash
gem install energy-charts-api2-sdk
```

**Lua**
```bash
luarocks install energy-charts-api2-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { EnergyChartsApi2SDK } from 'energy-charts-api2'

const client = new EnergyChartsApi2SDK({})

// List all publicpowers
const publicpowers = await client.PublicPower().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o energy-charts-api2-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "energy-charts-api2": {
      "command": "/abs/path/to/energy-charts-api2-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **PublicPower** | Public net electricity production by generation type for a given country and time range, served from `GET /public_power` with `country`, `start`, and `end` query parameters. | `/public_power` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from energychartsapi2_sdk import EnergyChartsApi2SDK

client = EnergyChartsApi2SDK({})

# List all publicpowers
publicpowers, err = client.PublicPower(None).list(None, None)
```

### PHP

```php
<?php
require_once 'energychartsapi2_sdk.php';

$client = new EnergyChartsApi2SDK([]);

// List all publicpowers
[$publicpowers, $err] = $client->PublicPower(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/energy-charts-api2-sdk/go"

client := sdk.NewEnergyChartsApi2SDK(map[string]any{})

// List all publicpowers
publicpowers, err := client.PublicPower(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "EnergyChartsApi2_sdk"

client = EnergyChartsApi2SDK.new({})

# List all publicpowers
publicpowers, err = client.PublicPower(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("energy-charts-api2_sdk")

local client = sdk.new({})

-- List all publicpowers
local publicpowers, err = client:PublicPower(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = EnergyChartsApi2SDK.test()
const result = await client.PublicPower().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = EnergyChartsApi2SDK.test(None, None)
result, err = client.PublicPower(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = EnergyChartsApi2SDK::test(null, null);
[$result, $err] = $client->PublicPower(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.PublicPower(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = EnergyChartsApi2SDK.test(nil, nil)
result, err = client.PublicPower(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:PublicPower(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Energy-Charts API

- Upstream: [https://energy-charts.info/](https://energy-charts.info/)
- API docs: [https://api.energy-charts.info/](https://api.energy-charts.info/)

- Data and API are published under the [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) licence.
- You may share and adapt the data for any purpose, including commercial use.
- Attribution to [Fraunhofer ISE / Energy-Charts](https://energy-charts.info/) is required.
- Upstream data sources (e.g. ENTSO-E, national TSOs) may carry their own terms; check before redistribution.

---

Generated from the Energy-Charts API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
