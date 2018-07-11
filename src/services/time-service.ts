export const getSeconds = (timestamp: number): number => {
  return Math.floor(timestamp / 1000);
};