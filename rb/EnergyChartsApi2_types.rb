# frozen_string_literal: true

# Typed models for the EnergyChartsApi2 SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# PublicPower entity data model.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
PublicPower = Struct.new(
  :data,
  :name,
  keyword_init: true
)

# Request payload for PublicPower#list.
#
# @!attribute [rw] data
#   @return [Array, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
PublicPowerListMatch = Struct.new(
  :data,
  :name,
  keyword_init: true
)

