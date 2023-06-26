"use strict";

module.exports = function isSparse(arr) {
  var countedItems = arr.reduce(function(itemCount, item) {
    itemCount += 1;
    return itemCount;
  }, 0);
  return arr.length > countedItems;
}