function sum(a, b) {
  return a + b;
}

function sayHelloTo(username){
  return "Hello, " + username + "!!";
}

function sub(a, b){
  return a - b;
}

function prod(a, b) {
  return a * b;
}

function answer() {
  return 42;
}

function digital_root(n) {
  return (n-1)%9+1;
}

function anomalyCode(x) {
  return '5' + x - x;
}

module.exports = {
  sum: sum,
  sub: sub,
  prod: prod,
  digital_root: digital_root,
  sayHelloTo: sayHelloTo,
  answer: answer,
  anomalyCode: anomalyCode
}

