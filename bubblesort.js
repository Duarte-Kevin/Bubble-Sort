function bubbleSort(array){
  	for(let i = array.length; i > 0; i--){
		for(let x = 0; x < i; x++){
			if(typeof array[x] === 'number'){
				if(array[x] > array[x+1]){
					array = swap(array, x, x+1);
				}
			} else {
				if(!array[x] || ! array[x+1]){
					return array;
				}
				let value1 = array[x][Object.keys(array[x])[0]];
				let value2 = array[x+1][Object.keys(array[x+1])[0]];
				console.log(`comparing ${value1} to ${value2}`);
				if(value1 > value2){
					array = swap(array,x, x+1 );
				}
			}
		}
	}
	return array;
}

function swap(array, a ,b){
	let tmp = array[a];
	array[a] = array[b];
	array[b] = tmp;
	return array;
}