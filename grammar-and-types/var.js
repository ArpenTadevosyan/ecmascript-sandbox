/**
 * Topic: <Var>
 * Problem instructions: <What will be printed?>
 * Relevant resources:
 * - <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types>
 */

 var x;
 console.log(x == undefined); // What will be printed?
 x = 3;

 var myvar = "my value";
 print();
 function print() {
   var myvar;
   console.log(myvar); // What will be printed?
   myvar = "local value";
 };
 console.log(myvar); // What will be printed?

/**
 * Solution - below is a base64 blob of the solution.
 *
--begin--
dmFyIHg7DQogY29uc29sZS5sb2coeCA9PSB1bmRlZmluZWQpOyAvLyB0cnVlDQogeCA9IDM7DQoNCiB2YXIgbXl2YXIgPSAibXkgdmFsdWUiOw0KIHByaW50KCk7DQogZnVuY3Rpb24gcHJpbnQoKSB7DQogICB2YXIgbXl2YXI7DQogICBjb25zb2xlLmxvZyhteXZhcik7ICAvLyB1bmRlZmluZWQNCiAgIG15dmFyID0gImxvY2FsIHZhbHVlIjsNCiB9Ow0KIGNvbnNvbGUubG9nKG15dmFyKTsgLy8gbXkgdmFsdWU=
--end--
 *
 */
