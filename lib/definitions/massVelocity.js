let metric,
  imperial

metric = {
  'kg/m': {
    name: {
      singular: 'Kilogram per meter',
      plural: 'Kilograms per meter',
    },
    to_anchor: 1,
  },
  'mt/km': {
    name: {
      singular: 'Metric tonne per kilometer',
      plural: 'Metric tonnes per kilometer',
    },
    to_anchor: 1,
  },
}

imperial = {
  't/mi': {
    name: {
      singular: 'Tonne per mile',
      plural: 'Tonnes per mile',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kg/m',
      ratio: 1.1023 * 1.609
    },
    imperial: {
      unit: 't/mi',
      ratio: 1.1023
    },
  },
}
