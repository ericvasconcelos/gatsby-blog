export const languages = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc}, ${curr.name} (${curr.nativeName})`;
    }

    return `${curr.name} (${curr.nativeName})`;
  }, '');
};
