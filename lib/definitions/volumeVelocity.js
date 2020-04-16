let metric,
  imperial

metric = {
  'l/m': {
    name: {
      singular: 'Litre per meter',
      plural: 'Litres per meter',
    },
    to_anchor: 1,
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
      transform: function (value) { return value * 425 },
    },
    imperial: {
      unit: 'gal/mi',
      transform: function (value) { return value / 425 },
    },
  },
}
