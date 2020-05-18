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
  'l/mt km': {
    name: {
      singular: 'Litre per metric tonne kilometer',
      plural: 'Litres per metric tonne kilometer',
    },
    to_anchor: 1000000,
  },
}

imperial = {
  'gal/t mi': {
    name: {
      singular: 'Gallon per tonne mile',
      plural: 'Gallon per tonne mile',
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
      ratio: (1000000 * 3.7854)/(1.1023 * 0.621371)
    },
    imperial: {
      unit: 'gal/t mi',
      ratio: (1000000 * 3.7854)/(1.1023 * 0.621371)
    },
  },
}
