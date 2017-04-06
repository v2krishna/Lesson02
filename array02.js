
//-----------------------------------------------------------------------------
//					array02.js
//-----------------------------------------------------------------------------
var favFoods;
favFoods = ['Chicken', 'Mango', 'Curry'];
for (i in favFoods)
{
	console.log(favFoods[i]);
}
console.log('Total number of ', favFoods.length);


//printing last element of the array
console.log(favFoods[favFoods.length-1]);


console.log('Printing the elements in reverse');

//printing the elements in reverse
for (i = favFoods.length-1; i >= 0; i--)
{
	console.log(favFoods[i]);
}

// modify Mango to Pineapple; othewise print
for ( i in favFoods)
{
	if(favFoods[i] === 'Mango')
	{
		favFoods[i] = 'Pineapple';
		console.log('				Changed Mango to Pineapple');
		console.log(favFoods[i]);
	}
	else 
	{
		console.log(favFoods[i]);
	}
}

//adding one more fav dish at the end
favFoods.push('Upma');
console.log(favFoods);
console.log(favFoods.length);

//remove upma from fav dish
favFoods.pop();
console.log(favFoods);