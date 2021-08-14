/**
 * Calculate the color "between" the colors on the legend
 * Return array is the same size as the values array input
 */
export default (legendValues, values) => {
  if (!legendValues || !legendValues.length || !values || !values.length) return [];

  return values.map((value) => {
    const legendIndex = legendValues.findIndex((legendItem) => value > legendItem.value);
    if (legendIndex < 0) return legendValues[legendValues.length - 1].color;

    const lowerLegend = legendValues[legendIndex];
    const upperLegend = legendValues[legendIndex - 1] || lowerLegend;
    const lowerColor = lowerLegend.color.replace('#', '');
    const upperColor = upperLegend.color.replace('#', '');
    const ratio = (value - lowerLegend.value) / (upperLegend.value - lowerLegend.value + 0.00001);

    const getR = (color) => parseInt(color.substring(0, 2), 16);
    const getG = (color) => parseInt(color.substring(2, 4), 16);
    const getB = (color) => parseInt(color.substring(4, 6), 16);

    const valid = (x) => Math.min(255, Math.max(0, Math.floor(x)));
    const calculate = (getX) => valid(getX(lowerColor) + (getX(upperColor) - getX(lowerColor)) * ratio);

    const r = calculate(getR);
    const g = calculate(getG);
    const b = calculate(getB);

    return `rgb(${r},${g},${b})`;
  });
};
