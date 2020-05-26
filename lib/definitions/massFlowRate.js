let metric, imperial

metric = {
  'kg/s': {
    name: {
      singular: 'Kilogram per second',
      plural: 'Kilograms per second',
    },
    to_anchor: 1,
  },
  'mt/h': {
    name: {
      singular: 'Metric tonne per hour',
      plural: 'Metric tonnes per hour',
    },
    to_anchor: 1 / 3.6,
  },
}

imperial = {
  't/h': {
    name: {
      singular: 'Tonne per hour',
      plural: 'Tonnes per hour',
    },
    to_anchor: (1 / 3.6),
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kg/s',
      transform: function (V) { return V * 1.1023 },
    },
    imperial: {
      unit: 't/h',
      ratio: 231,
    },
  },
}
