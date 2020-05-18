let metric, imperial

metric = {
  'kg/s': {
    name: {
      singular: 'Kilogram per second',
      plural: 'Kilograms per second',
    },
    to_anchor: 3.6,
  },
  'mt/h': {
    name: {
      singular: 'Metric tonne per hour',
      plural: 'Metric tonnes per hour',
    },
    to_anchor: 1,
  },
}

imperial = {
  't/h': {
    name: {
      singular: 'Tonne per hour',
      plural: 'Tonnes per hour',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  _anchors: {
    metric: {
      unit: 'kg/s',
      ratio: 1,
    },
    imperial: {
      unit: 't/h',
      ratio: 231,
    }
  },
}
