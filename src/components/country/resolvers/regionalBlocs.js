export const regionalBlocs = (val) => {
  return val.reduce((acc, curr) => {
    if (acc) {
      return `${acc}, ${curr.acronym} (${curr.name})`;
    }

    return `${curr.acronym} (${curr.name})`;
  }, '');
};
