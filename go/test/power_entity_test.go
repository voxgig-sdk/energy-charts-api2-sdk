package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/energy-charts-api2-sdk/go"
	"github.com/voxgig-sdk/energy-charts-api2-sdk/go/core"

	vs "github.com/voxgig-sdk/energy-charts-api2-sdk/go/utility/struct"
)

func TestPowerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Power(nil)
		if ent == nil {
			t.Fatal("expected non-nil PowerEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := powerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "power." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set ENERGYCHARTSAPI__TEST_POWER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		powerRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.power", setup.data)))
		var powerRef01Data map[string]any
		if len(powerRef01DataRaw) > 0 {
			powerRef01Data = core.ToMapAny(powerRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = powerRef01Data

		// LIST
		powerRef01Ent := client.Power(nil)
		powerRef01Match := map[string]any{}

		powerRef01ListResult, err := powerRef01Ent.List(powerRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, powerRef01ListOk := powerRef01ListResult.([]any)
		if !powerRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", powerRef01ListResult)
		}

	})
}

func powerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "power", "PowerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read power test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse power test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"power01", "power02", "power03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("ENERGYCHARTSAPI__TEST_POWER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"ENERGYCHARTSAPI__TEST_POWER_ENTID": idmap,
		"ENERGYCHARTSAPI__TEST_LIVE":      "FALSE",
		"ENERGYCHARTSAPI__TEST_EXPLAIN":   "FALSE",
		"ENERGYCHARTSAPI__APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["ENERGYCHARTSAPI__TEST_POWER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["ENERGYCHARTSAPI__TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["ENERGYCHARTSAPI__APIKEY"],
			},
			extra,
		})
		client = sdk.NewEnergyChartsApi2SDK(core.ToMapAny(mergedOpts))
	}

	live := env["ENERGYCHARTSAPI__TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["ENERGYCHARTSAPI__TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
