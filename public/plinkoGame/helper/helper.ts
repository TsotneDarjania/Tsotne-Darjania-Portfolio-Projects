export function calculatePercentage(value: number, total: number) {
  return (value / total) * 100;
}

export function percentof(value: number, percent: number) {
  return (percent / 100) * value;
}

export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
