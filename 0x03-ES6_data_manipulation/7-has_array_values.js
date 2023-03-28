export default function hasValuesFromArray(set, arr) {
  // Use the every() method to check if every element in the array exists in the set
  return arr.every(value => set.has(value));
}
// module.exports = hasValuesFromArray;
