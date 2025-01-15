/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive( number ) {  
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber( a, b, c ) {  
  let max = arguments[0];
  for(let i=1;i<arguments.length;i++){
    if(arguments[i] > max)
      max = arguments[i];
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing( queen, king ) {  
  function checkDiagonal(obj) {    
    while(obj.x !== 8){
      obj.x = obj.x + 1;
      obj.y = obj.y - 1;
    }
    console.log(obj);
    return obj;
  }
  if(queen.x === queen.y && king.x === king.y || queen.x === king.x || queen.y === king.y || JSON.stringify(checkDiagonal(queen)) === JSON.stringify(checkDiagonal(king)))
    return true;
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle( a, b, c ) {  
  if((a === b && c < a + b && c > a) || (a === c && b < a + c && b > a) || (b === c && a < b + c && a > b))
    return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals( num ) {  
  const obj = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
  };
  if(num <= 10)
    return obj[num];
  else{
    let str = String(num);
    let tens = str[0];
    tens = Number(tens) > 1 ? fill(obj[10], Number(tens)) : obj[10];
    let units = str[1];
    return tens + obj[units];
  }
  function fill(s, n) {
    let scopy = s;
    while(s.length < n){
      s += scopy;
    }
    return s;
  }
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString( numberStr ) {  
  const obj = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    "-": "minus",
    ".": "point",
    ",": "point"
  };
  let res = "";
  let result = "";
  for(let i=0;i<numberStr.length;i++){    
    switch(numberStr[i]) {
      case "0":
        res += "zero ";
        break;
      case "1":
        res += "one ";
        break;
      case "2":
        res += "two ";
        break;
      case "3":
        res += "three ";
        break;
      case "4":
        res += "four ";
        break;
      case "5":
        res += "five ";
        break;
      case "6":
        res += "six ";
        break;
      case "7":
        res += "seven ";
        break;
      case "8":
        res += "eight ";
        break;
      case "9":
        res += "nine ";
        break;
      case "-":
        res += "minus ";
        break;
      case ".":
        res += "point ";
        break;
      case ",":
        res += "point ";
        break;
    }
  }
  for(let i=0;i<res.length-1;i++){
    result += res[i];
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome( str ) {  
  let reversed = "";
  for(let i=str.length-1;i>=0;i--){
    reversed += str[i];
  }
  if(str === reversed)
    return true;
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf( str, letter ) {  
  for(let i=0;i<str.length;i++){
    if(str[i] === letter){      
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber( num, digit ) {  
  let str = "" + num;
  for(let i=0;i<str.length;i++){
    if(+str[i] === digit)
      return true;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex( arr ) {  
  for(let i=0;i<arr.length;i++){
    let left = 0;
    let right = 0;
    for(let j=i-1;j>=0;j--){
      left += arr[j];
    }
    for(let j=i+1;j<arr.length;j++){
      right += arr[j];
    }
    if(left === right)
      return i;
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix( size ) {  
  let top = 0;
  let left = 0;
  let right = size;
  let bottom = size;
  let j = 1;
  let matrix = [];
  for (let i=0;i<size;i++){
    matrix[i] = [];
  }
  while(j <= size*size){
    for(let i=left;i<right;i++){
      matrix[top][i] = j++;
    }
    top++;
    for(let i=top;i<bottom;i++){
      matrix[i][right-1] = j++;
    }
    right--;
    for(let i=right-1;i>=left;i--){
      matrix[bottom-1][i] = j++;
    }
    bottom--;
    for(let i=bottom-1;i>=top;i--){
      matrix[i][left] = j++;
    }
    left++;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix( matrix ) {  
  const rotated = [];
  for(let i=0;i<matrix.length;i++){
    rotated[i] = [];
  }
  for(let i=0;i<matrix.length;i++){        
    for(let j=0;j<matrix[i].length;j++){
      rotated[j][matrix.length-1-i] = matrix[i][j];
    }
  }
  for(let i=0;i<rotated.length;i++){        
    for(let j=0;j<rotated[i].length;j++){
      matrix[i][j] = rotated[i][j];
    }
  }
  return matrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc( arr ) {
  throw new Error('Not implemented');
  /*for(let i=0;i<arr.length;i++){
    if(arr[i] > arr[arr.length-1]){
      let el = arr[i];
      arr[i] = arr[arr.length-1];
      arr[arr.length-1] = el;
    }
    if(arr[i] > arr[i+1]){
      let elem = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = elem;
    }
  }
  return arr;*/  
  if(arr.length == 1)
    return arr[0];

  let pivot = arr.length%2 == 0 ? arr[arr.length/2] : arr[(arr.length-1)/2];
  let left = [];
  let middle = [];
  let right = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] < pivot)
      left.push(arr[i]);
    else if(arr[i] > pivot)
      right.push(arr[i]);
    else if(arr[i] == pivot)
      middle.push(arr[i]);    
  }
  //debugger;  
 // if(left.length == 0 & right.length !=0)
    //return [pivot, sortByAsc(right)].flat();
  //else if(left.length !=0 & right.length == 0)
    //return [sortByAsc(left), pivot].flat();
  //else
    return [sortByAsc(left), middle, sortByAsc(right)].flat();
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar( str, iterations ) {  
  if(!shuffleChar.cache)
    shuffleChar.cache = {};
  if(shuffleChar.cache[str]){    
    /*if(iterations === 1)
      return shuffleChar.cache[str].r;    
    let st = check(shuffleChar.cache[str].r);
    return st;*/
    return shuffleChar.cache[Object.keys(shuffleChar.cache)[iterations%Object.keys(shuffleChar.cache).length]].r;
  }
  
  function check(s) {    
    if(shuffleChar.cache[s]){
      if(iterations === 1)
        return shuffleChar.cache[s].r;      
      --iterations;
      return check(shuffleChar.cache[s].r);
    }else
      return s;          
  }
  
  let res = "";
  let chunk = "";
  for(let i=0;i<str.length;i++){    
    if(i%2 === 0)
      res += str[i];
    else
      chunk += str[i];
  }
  if(!shuffleChar.cache[str])  
    shuffleChar.cache[str] = {r: res + chunk, itr: String(iterations)};
  if(iterations === 1){
    shuffleChar.cache = {};
    return res + chunk;
  }    
  return shuffleChar(res + chunk, --iterations);
  
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger( number ) {  
  let str = String(number);
  let s = "";
  let t;
  let ind;
  let min;
  let indx;
  let arr = [];
  let res = "";
  for(let i=str.length-1;i>=0;i--){
    if(Number(str[i]) < Number(str[i+1])){
      t = str[i];
      ind = i;
      break;
    }
  }
  if(!t)
    return number;
  min = str[ind+1];
  indx = ind + 1;
  console.log(min);
  for(let i=ind+2;i<str.length;i++){
    if(str[i] < min && str[i] > t){
      min = str[i];
      indx = i;      
    }
  }  
  console.log(ind,indx);
  for(let i=0;i<str.length;i++){
    if(i === ind){
      s += min;
      continue;
    }
    if(i === indx){
      s += t;
      continue;
    }
    s += str[i];
  }
  console.log(s);
  for(let i=ind+1;i<s.length;i++){
    arr.push(Number(s[i]));
  }
  arr.sort((a, b) => a - b);
  for(let i=0;i<=ind;i++){
    res += s[i];
  }
  return Number(res + arr.join(""));
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
