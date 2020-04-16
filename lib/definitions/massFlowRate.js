let metric

metric = {
  'kg/s': {
    name: {
      singular: 'Kilogram per second',
      plural: 'Kilograms per second',
    },
    to_anchor: 3.6,
  },
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
  },
}
