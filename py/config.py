# EnergyChartsApi2 SDK configuration


def make_config():
    return {
        "main": {
            "name": "EnergyChartsApi2",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$ARRAY`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "index$": 1,
          },
        ],
        "name": "public_power",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "de",
                      "kind": "query",
                      "name": "country",
                      "orig": "country",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "end",
                      "orig": "end",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "kind": "query",
                      "name": "start",
                      "orig": "start",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                  ],
                },
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
