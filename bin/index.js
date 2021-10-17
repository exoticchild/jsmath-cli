#!/usr/bin/env node
var options = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh", "exp", "expm1", "floor", "fround", "log", "log1p", "log2", "log10", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"];
if (options.includes(process.argv[2])) {
    console.log(eval("Math." + process.argv[2] + "(" + process.argv[3] + ")"));
} else {
    console.log("Invalid option");
}