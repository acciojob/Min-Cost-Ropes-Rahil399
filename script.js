function mincost(arr)
	{ 
		arr.sort((a,b) => a - b);

	    let totalCost = 0;
	
	    while(arr.length > 1){
	        const smallest1 = arr.shift();
	        const smallest2 = arr.shift();
	
	        const cost = smallest1 + smallest2;
	        totalCost += cost;
	
	        arr.push(cost);
	
	
	        arr.sort((a,b) => a -b);
	    } 
	}

module.exports=mincost;
