
describe('Bubble Sort', function(){
	var array = [5,4,3,2,1];
	beforeAll(function () {
  		spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
	});  


	it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  	});

	it('sorts reverse array', function(){
    	expect( bubbleSort(array) ).toEqual( [1,2,3,4,5] );
  	});



	it('does not perform extra swaps', function () {
  		bubbleSort(array);
  		expect(window.swap.calls.count()).toEqual( ((array.length-1)*array.length)/2 );
	}); 

});




