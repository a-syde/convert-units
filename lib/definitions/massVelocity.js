let metric,
  imperial

metric = {
  'kg/m': {
    name: {
      singular: 'Kilogram per minute',
      plural: 'Kilograms per minute',
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
      transform: function (value) { return value * 1.609 },
    },
    imperial: {
      unit: 't/mi',
      transform: function (value) { return value / 1.609 },
    },
  },
}
