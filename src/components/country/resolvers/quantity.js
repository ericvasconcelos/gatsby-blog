export const quantity = (val, measure = '') => {
  const formatted = new Intl.NumberFormat('en-US').format(val);
  return `${formatted} ${measure}`;
};
