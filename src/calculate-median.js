function calculate_median(arr) {
	var i;
	var j = 0;
	var num_array = new Array();
	for(i = 0;i<arr.length;i++){
		if(i%2==1){
			num_array[j] = arr[i];
			j++;
		}
	}
	
	var num_a = num_array.sort(function(a,b){return a-b;});
	if(num_a.length%2==1)
		return num_a[parseInt(num_a.length/2)];
	else
		return (num_a[parseInt(num_a.length/2)]+num_a[parseInt(num_a.length/2)-1])/2;
		
}

module.exports = calculate_median;
