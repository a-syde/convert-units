let metric,
  imperial

metric = {
  'l/kg': {
    name: {
      singular: 'Liter per kilogram',
      plural: 'Liters per kilogram',
    },
    to_anchor: 1,
  },
  'l/mt': {
    name: {
      singular: 'Liter per tonne',
      plural: 'Liters per tonne',
    },
    to_anchor: 1 / 1000,
  },
}

imperial = {
  'gal/t': {
    name: {
      singular: 'Gallon per tonne',
      plural: 'Gallons per tonne',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'l/kg',
      ratio: 264,
    },
    imperial: {
      unit: 'gal/t',
      ratio: 1 / 264
    },
  },
}
