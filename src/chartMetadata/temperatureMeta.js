export default {
  weatherType: 'temperature',

  legendValues: [
    { color: '#cf597e', label: '100°F', value: 100 },
    { color: '#e88471', label: '85°F', value: 85 },
    { color: '#eeb479', label: '60°F', value: 60 },
    { color: '#e9e29c', label: '55°F', value: 55 },
    { color: '#9ccb86', label: '40°F', value: 40 },
    { color: '#339392', label: '25°F', value: 25 },
    { color: '#006aa3', label: '10°F', value: 10 },
  ],

  min: -15,
  max: 15,

  units: '°F',

  wrongnessLabel: `Wrongness °F`,
  colorLabel: `Absolute Temperature °F`, // TODO: Color label?
};
