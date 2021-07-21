export const currencies = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc} | ${curr.name} (${curr.code} - ${curr.symbol})`;
    }

    return `${curr.name} (${curr.code} - ${curr.symbol})`;
  }, '');
};
