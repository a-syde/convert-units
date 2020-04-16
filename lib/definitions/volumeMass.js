let metric = {
  'l/kg': {
    name: {
      singular: 'Liter per kilogram',
      plural: 'Liters per kilogram',
    },
    to_anchor: 1000,
  },
  'l/t': {
    name: {
      singular: 'Liter per tonne',
      plural: 'Liters per kilogram',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  _anchors: {
    metric: {
      unit: 'l/kg',
      ratio: 1,
    },
  },
}
