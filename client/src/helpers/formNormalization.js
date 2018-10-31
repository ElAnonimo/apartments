export const lessThan = otherField => (value, previousValue, allValues) => {
  if (!allValues[otherField] || !value) {
    return value;
  }

  return value <= allValues[otherField] ? value : allValues[otherField]
};

export const greaterThan = otherField => (value, previousValue, allValues) => {
  if (!allValues[otherField] || !value) {
    return value;
  }

  return value >= allValues[otherField] ? value : allValues[otherField]
};

export const textOnly = () => (value) => {
  return value.replace(/\d/g,'');
};