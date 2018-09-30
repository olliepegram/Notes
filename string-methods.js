let name = '   Ollie Pegram   ';

// Length property
name.length;

//Convert to upper case
console.log(name.toUpperCase());

//Convert to lower case
name.toLowerCase();

//Includes method
 //let password = 'abc123password098';
//console.log(password.includes('password'));

//Trim
console.log(name.trim());

let isValidPassword = function(password) {
	return password.length > 8 && !password.includes('password');
}

console.log(isValidPassword('asd'));
console.log(isValidPassword('iefewofuuewufwiu#$#$#3nj'));
console.log(isValidPassword('jndjndepasswordbefibfiewf'));
