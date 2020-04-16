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
  't/km': {
    name: {
      singular: 'Tonne per kilometer',
      plural: 'Tonnes per kilometer',
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
