function hello(){
	console.log("Hello Homework3");
	return;
}
hello();

function stringToInt(input){
	var value = parseInt(input);
	return value;
}

function maskNumber(input){
	var mask_number = "*******"+input.substring(7,11);
	return mask_number; 
}

function getAverage(input_array){
	var sum=0;
	var average=0;
	for(var i=0;i<input_array.length;i++){
		sum+=input_array[i];
	}
	average = sum/(input_array.length);
	return average;
}

function isMultipleSeven(input){
	if(input%7 == 0)
		return true;
	else
		return false;
}

function operation(input,a,b){
	var result;
	switch(input){
 		case "add":
 			result = a+b; break;
		case "substract":
			result = a-b; break;
		case "multiply":
			result = a*b; break;
		case "divide":
			result = a/b; break;
		default:
			console.log("Not supported"); break;
	}
	return result;
}

function triangleMtn(input){
	var mount="";
	for(var i=0;i<input;i++){
		for(var j=0;j<i+1;j++){
			mount+="*";
		}
		console.log(mount);
		mount="";
	}
}