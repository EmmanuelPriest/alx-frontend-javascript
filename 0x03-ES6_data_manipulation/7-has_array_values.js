export default function hasValuesFromArray(set, arr) {
  for (let n = 0; n < arr.length; n++) {
    if (!set.has(arr[n])) {
      return false;
    }
  }
  return true;
}
// module.exports = hasValuesFromArray;
