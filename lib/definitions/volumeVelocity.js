let metric,
  imperial

metric = {
  'l/m': {
    name: {
      singular: 'Litre per meter',
      plural: 'Litres per meters',
    },
    to_anchor: 1,
  },
  'l/km': {
    name: {
      singular: 'Litre per kilometer',
      plural: 'Litres per kilometer',
    },
    to_anchor: 1 / 1000,
  },
}

imperial = {
  'gal/mi': {
    name: {
      singular: 'Gallon per mile',
      plural: 'Gallons per mile',
    },
    to_anchor: 1,
  },
}

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'l/m',
      ratio: 425,
    },
    imperial: {
      unit: 'gal/mi',
      ratio: 1 / 425,
    },
  },
}
