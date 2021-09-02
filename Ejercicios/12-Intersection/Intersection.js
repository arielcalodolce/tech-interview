function intersection(arr1, arr2) {
  // Your code here:

  return arr1.filter( e => arr2.includes(e));
}

module.exports = intersection;
