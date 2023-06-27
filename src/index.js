var isSparse = require('./is-sparse.js');

if (!Array.isSparse) {
  Array.isSparse = isSparse;
}