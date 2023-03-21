export default function appendToEachArrayValue(array, appendString) {
  // eslint-disabled-next-line
  for (let value of array) {
    // eslint-disable-next-line
    value = appendString + value;
  }

  return array;
}
