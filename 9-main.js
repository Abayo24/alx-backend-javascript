/* eslint-disable linebreak-style */
import guardrail from './0x01-ES6_promise/9-try';
import divideFunction from './0x01-ES6_promise/8-try';

console.log(guardrail(() => divideFunction(10, 2)));
console.log(guardrail(() => divideFunction(10, 0)));
