# JSMATH CLI #
### *About* ###
The JSMATH CLI is a simple command-line interface written in javascript that provides javascript math functions to the command line and to bash scripting
### *Usage* ###
To use the JSMATH CLI, first install the library globally on your system (if you get a permission error, use sudo)
```
$ npm install jsmath-cli --global
```
Now, you can use all the following math functions like so (used in a bash script for reference), along with explanations for the functions and the output for the examples
```bash
jsmath abs 1
#gives the absolute value of a number and returns 1
jsmath acos 1
#gives the arccosine of a number and returns 0
jsmath acosh 1
#gives the hyperbolic arccosine of a number and returns 0
jsmath asin 1
#gives the arcsine of a number and returns 1.57...
jsmath asinh 1
#gives the hyperbolic arcsine of a number and returns 0.88...
jsmath atan 1
#gives the arctangent of a number and returns 0.78...
jsmath atanh 1
#gives the hyperbolic arctangent and returns Infinity
jsmath cbrt 1
#gives the cube root of a number and returns 1
jsmath ceil 1
#rounds a number up and returns 1
jsmath clz32 1
#gives the number of leading 0's in a 32-bit binary representation of a number and returns 31
jsmath cos 1
#gives the cosine of a number and returns 0.54...
jsmath cosh 1
#gives the hyperbolic cosine of a number and returns 1.54...
jsmath exp 1
#gives e taken to the power of the number and returns 2.71... (e)
jsmath expm1 1
#gives e taken to the power of the number minus 1 and returns 1.71... (e-1)
jsmath floor 1
#rounds a number down and returns 1
jsmath fround 1
#gives the nearest 32-bit single precision float representation of a number and returns 1
jsmath log 1
#gives the natural logarithm of a number and returns 0
jsmath log1p 1
#gives the natural logarithm of 1 + the number (see Mozilla's website for details) and returns 0.69...
jsmath log2 1
#gives the base 2 logarithm of a number and returns 0
jsmath log10 1
#gives the base 10 logarithm of a number and returns 0
jsmath random
#gives a random number between 0 and 1
jsmath round 1
#rounds a number and returns 1
jsmath sign 1
#gives the sign of a number (+/-) in the form of an integer (1 if the number is positive, -1 if the number is negative) and returns 1
jsmath sin 1
#gives the sine of a number and returns 0.84...
jsmath sinh 1
#gives the hyperbolic sine of a number and returns 1.17...
jsmath sqrt 1
#gives the square root of a number and returns 1
jsmath tan 1
#gives the tangent of a number and returns 1.55...
jsmath tanh 1
#gives the hyperbolic tangent of a number and returns 0.76...
jsmath trunc 1
#gives the number with all the decimals cut off (just the whole number portion of a rational number and is basically the same as floor unless it is a negative number) and returns 1
```
For more information on each function, I suggest you look at Mozilla's website on them (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) to get a better understanding. Enjoy!
<br>
*v0.0.1*