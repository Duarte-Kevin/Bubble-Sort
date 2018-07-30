function bubbleSort(array){
	for(let i = array.length; i > 0; i--){
		for(let x = 0; x < i; x++){
			if(array[x] > array[x+1]){
				array = swap(array, x, x+1);
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