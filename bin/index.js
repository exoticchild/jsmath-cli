#!/usr/bin/env node
"use strict";
var options = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "cbrt", "ceil", "clz32", "cos", "cosh", "exp", "expm1", "floor", "fround", "log", "log1p", "log2", "log10", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"];
//@ts-ignore
if (options.includes(process.argv[2])) {
    //@ts-ignore
    console.log(eval("Math." + process.argv[2] + "(" + process.argv[3] + ")"));
}
