

function pi(){

let p = 4; 
let operator  = -1; 
for(let i = 0; i < 10000; i ++ ){

	p += operator * ( 4/(3+2*i)); 
	operator *= -1; 
}

console.log( 'Valor de pi '+p)

}; 

pi(); 
