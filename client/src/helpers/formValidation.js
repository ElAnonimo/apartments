export const lessThan = otherField => (value, previousValue, allValues) => {
  if (!allValues[otherField]) {
    return value;
  }

  return value < allValues[otherField] ? value : previousValue
};