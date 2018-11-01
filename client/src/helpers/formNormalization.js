export const lessThan = otherField => (value, previousValue, allValues) => {
  if (!value) {
    return '';
  }

  if (!allValues[otherField]) {
    return value;
  }

  return value <= allValues[otherField] ? value : allValues[otherField]
};

export const greaterThan = otherField => (value, previousValue, allValues) => {
  if (!value) {
    return '';
  }

  if (!allValues[otherField]) {
    return value;
  }

  return value >= allValues[otherField] ? value : allValues[otherField]
};

export const textOnly = () => (value) => {
  return value.replace(/\d/g,'');
};

export const clearZeroValue = () => (value) => {
  if (!value) {
    return '';
  }

  return value;
};