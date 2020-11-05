//I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

function nthFibo(x){
	let a = 0
	let b = 1
	let c;
	
	for(let i=0; i<x; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}
