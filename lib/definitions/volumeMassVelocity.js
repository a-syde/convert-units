let metric,
  imperial

metric = {
  'l/kg m': {
    name: {
      singular: 'Litre per kilogram meter',
      plural: 'Litres per kilogram meter',
    },
    to_anchor: 1,
  },
  'l/t km': {
    name: {
      singular: 'Litre per tonne kilometer',
      plural: 'Litres per tonne kilometer',
    },
    to_anchor: (1000 * 1000),
  },
}

imperial = {
  'l/t mi': {
    name: {
      singular: 'Litre per tonne mile',
      plural: 'Litres per tonne mile',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'l/kg m',
      transform: function (value) { return value / (1000 / 1609) },
    },
    imperial: {
      unit: 'l/t mi',
      transform: function (value) { return value * (1000 * 1609) },
    },
  },
}
