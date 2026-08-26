# EnergyChartsApi2 SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "EnergyChartsApi2",
            "slug": "energy-charts-api2",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.energy-charts.info",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "public_power": {},
            },
        },
        "entity": {
      "public_power": {
        "fields": [
          {
            "name": "data",
            "short": "Energy production values in MW",
            "type": "`$ARRAY`",
          },
          {
            "name": "name",
            "short": "Type of energy production",
            "type": "`$STRING`",
          },
        ],
        "name": "public_power",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "de",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "end",
                      "orig": "end",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/public_power",
                "parts": [
                  "public_power",
                ],
                "select": {
                  "exist": [
                    "country",
                    "end",
                    "start",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
