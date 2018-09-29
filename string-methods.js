let name = '   Ollie Pegram  '

// Length property
console.log(name.length);

// Convert to upper case
console.log(name.toUpperCase());

// Convert to lower case
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('123'));

// Trim
console.log(name.trim());

let isValidPassword = function (password) {
  return password.length >= 8 && !password.includes('password')
}

console.log(isValidPassword('asdf'));
console.log(isValidPassword('hsjdu27dfgd'));
console.log(isValidPassword('dsjfedjfjfpassword'));
