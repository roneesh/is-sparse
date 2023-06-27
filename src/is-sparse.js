"use strict";

var consts = require('../consts');

module.exports = function isSparse(arr) {
  if (!Array.isArray(arr)) {
    console.error(consts.NON_ARRAY_ERROR_MSG);
    return;
  }
  var countedItems = arr.reduce(function(itemCount, item) {
    itemCount += 1;
    return itemCount;
  }, 0);
  return arr.length > countedItems;
}