require('../src');

describe('isSparse', function() {

  it('should show a dense array as not sparse', function() {
    var dense = [1, 2, 3];
    expect(Array.isSparse(dense)).toBe(false);
  });

  it('should show a filled sparse array as not sparse', function() {
    var filledSparse = Array(100).fill(undefined);
    expect(Array.isSparse(filledSparse)).toBe(false);
  });

  it('should show a completely empty array as sparse', function() {
    var completelyEmpty = Array(1);
    expect(Array.isSparse(completelyEmpty)).toBe(true);
  });

  it('soudl show a sparse array as sparse', function() {
    var sparse = ['foo'];
    sparse.length = 2;
    expect(Array.isSparse(sparse)).toBe(true);
  });

});
