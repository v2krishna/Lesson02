//-----------------------------------------------------------------------------
//					practice -6 hasDriverLicense and hasDrunk js
//-----------------------------------------------------------------------------
var age , hasDrunk, hasDriverLicense ;
age = 16;
hasDrunk =true;
hasDriverLicense = true;
if(age >=16 || (!hasDrunk && hasDriverLicense))
{
	console.log("Can  Drive");
}
else 
{
	console.log("Cannot Drive");
}