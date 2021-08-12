export default (legendValues, values) => {
  if (!legendValues || !values) return [];

  return values.map((value) => {
    const legendIndex = legendValues.findIndex((_, index) => {
      const belowThis = value < legendValues[index].value;
      const aboveNext = !legendValues[index + 1] || value > legendValues[index + 1].value;
      return belowThis && aboveNext;
    });
    if (legendIndex < 0) return '';
    const legend1 = legendValues[legendIndex];
    const legend2 = legendValues[legendIndex + 1] || legend1;
    const color1 = legend1.color.replace('#', '');
    const color2 = legend2.color.replace('#', '');
    const ratio = (legend1.value - value) / (legend2.value - legend1.value);

    const r = Math.ceil(
      parseInt(color1.substring(0, 2), 16) * ratio + parseInt(color2.substring(0, 2), 16) * (1 - ratio)
    );
    const g = Math.ceil(
      parseInt(color1.substring(2, 4), 16) * ratio + parseInt(color2.substring(2, 4), 16) * (1 - ratio)
    );
    const b = Math.ceil(
      parseInt(color1.substring(4, 6), 16) * ratio + parseInt(color2.substring(4, 6), 16) * (1 - ratio)
    );

    const valid = (x) => Math.min(255, Math.max(0, x));

    return `rgb(${valid(r)},${valid(g)},${valid(b)})`;
  });
};
