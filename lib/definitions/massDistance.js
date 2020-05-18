let metric,
  imperial

metric = {
  'kg m': {
    name: {
      singular: 'Kilogram multiplied by meter',
      plural: 'Kilograms multiplied by meter',
    },
    to_anchor: 1,
  },
  'mt km': {
    name: {
      singular: 'Metric tonne multiplied by meter',
      plural: 'Metric tonne multiplied by meters',
    },
    to_anchor: 1000000,
  },
}

imperial = {
  't mi': {
    name: {
      singular: 'Tonne multiplied by mile',
      plural: 'Tonne multiplied by mile',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kg m',
      ratio: 0.001 / 1609 * 1.1023
    },
    imperial: {
      unit: 't mi',
      ratio: 1 / 1.609
    },
  },
}
