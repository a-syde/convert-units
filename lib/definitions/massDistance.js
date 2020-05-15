let metric,
  imperial

metric = {
  'kg m': {
    name: {
      singular: 'Kilogram meter',
      plural: 'Kilograms meter',
    },
    to_anchor: 1,
  },
  't km': {
    name: {
      singular: 'Tonne meter',
      plural: 'Tonne meters',
    },
    to_anchor: 1,
  },
}

imperial = {
  't mi': {
    name: {
      singular: 'Tonne per mile',
      plural: 'Tonne per mile',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 't km',
      ratio: 1.609
    },
    imperial: {
      unit: 't mi',
      ratio: 1 / 1.609
    },
  },
}
