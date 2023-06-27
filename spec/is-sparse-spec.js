var isSparse = require('../src/is-sparse');
var consts = require('../consts');

describe('isSparse method', function() {

  it('should warn if a non-array object is passed in', function() {
    spyOn(console, 'error');
    var nonArray = '';
    expect(isSparse(nonArray)).toBe(undefined);
    expect(console.error).toHaveBeenCalledWith(consts.NON_ARRAY_ERROR_MSG);
  });

  it('should show a dense array as not sparse', function() {
    var dense = [1, 2, 3];
    expect(isSparse(dense)).toBe(false);
  });

  it('should show a filled sparse array as not sparse', function() {
    var filledSparse = Array(100).fill(undefined);
    expect(isSparse(filledSparse)).toBe(false);
  });

  it('should show a completely empty array as sparse', function() {
    var completelyEmpty = Array(1);
    expect(isSparse(completelyEmpty)).toBe(true);
  });

  it('soudl show a sparse array as sparse', function() {
    var sparse = ['foo'];
    sparse.length = 2;
    expect(isSparse(sparse)).toBe(true);
  });

});
