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
function isPositive(number) {
  return !(number < 0);
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
function getMaxNumber(a, b, c) {
  const maxOfTwo = a > b ? a : b;
  return maxOfTwo > c ? maxOfTwo : c;
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
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
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
function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0 || a + b < c || a + c < b || b + c < a) {
    return false;
  }
  return a === b || b === c || a === c;
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
function convertToRomanNumerals(num) {
  let num2 = num;
  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
  };

  let result = '';

  if (romanNumerals[num]) {
    return romanNumerals[num];
  }

  while (num2 > 0) {
    if (num2 >= 10) {
      result += romanNumerals[10];
      num2 -= 10;
    } else if (num2 === 9) {
      result += romanNumerals[9];
      num2 -= 9;
    } else if (num2 >= 5) {
      result += romanNumerals[5];
      num2 -= 5;
    } else if (num2 === 4) {
      result += romanNumerals[4];
      num2 -= 4;
    } else {
      result += romanNumerals[1];
      num2 -= 1;
    }
  }

  return result;
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
function convertNumberToString(numberStr) {
  let result = '';

  for (let i = 0; i < numberStr.length; i += 1) {
    const currentNum = numberStr[i];

    switch (currentNum) {
      case '-':
        result += 'minus';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      case '.':
        result += 'point';
        break;
      case ',':
        result += 'point';
        break;
      default:
        break;
    }
    if (i !== numberStr.length - 1) result += ' ';
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
function isPalindrome(str) {
  const srtMiddle = str.length / 2;

  for (let i = 0; i < srtMiddle; i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
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
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result = -1;

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
      break;
    }
  }
  return result;
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
function isContainNumber(num, digit) {
  const str = num.toFixed();
  const strDigit = digit.toFixed();

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === strDigit) {
      return true;
    }
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
function getBalanceIndex(arr) {
  const { length } = arr;

  let totalSum = 0;
  let leftSum = 0;

  for (let i = 0; i < length; i += 1) {
    totalSum += arr[i];
  }

  for (let i = 0; i < length - 1; i += 1) {
    totalSum -= arr[i];

    if (leftSum === totalSum) {
      return i;
    }

    leftSum += arr[i];
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
function getSpiralMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let num = 1;
  let topRow = 0;
  let rightCol = size - 1;
  let bottomRow = size - 1;
  let leftCol = 0;

  while (topRow <= bottomRow) {
    for (let i = leftCol; i <= rightCol; i += 1) {
      matrix[topRow][i] = num;
      num += 1;
    }
    topRow += 1;

    for (let i = topRow; i <= bottomRow; i += 1) {
      matrix[i][rightCol] = num;
      num += 1;
    }
    rightCol -= 1;

    for (let i = rightCol; i >= leftCol; i -= 1) {
      matrix[bottomRow][i] = num;
      num += 1;
    }
    bottomRow -= 1;

    for (let i = bottomRow; i >= topRow; i -= 1) {
      matrix[i][leftCol] = num;
      num += 1;
    }
    leftCol += 1;
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
function rotateMatrix(matrix) {
  const tempMatrix = matrix;
  const { length } = matrix;

  for (let circle = 0; circle < Math.floor(length / 2); circle += 1) {
    const first = circle;
    const last = length - 1 - circle;

    for (let i = first; i < last; i += 1) {
      const rest = i - first;

      const top = matrix[first][i];

      tempMatrix[first][i] = matrix[last - rest][first];
      tempMatrix[last - rest][first] = matrix[last][last - rest];
      tempMatrix[last][last - rest] = matrix[i][last];
      tempMatrix[i][last] = top;
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
function sortByAsc(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const merge = (start, middle, end) => {
    const result = [];
    let leftIndex = start;
    let rightIndex = middle;

    while (leftIndex < middle && rightIndex < end) {
      if (arr[leftIndex] <= arr[rightIndex]) {
        result[result.length] = arr[leftIndex];
        leftIndex += 1;
      } else {
        result[result.length] = arr[rightIndex];
        rightIndex += 1;
      }
    }

    for (let i = leftIndex; i < middle; i += 1) {
      result[result.length] = arr[i];
    }
    for (let i = rightIndex; i < end; i += 1) {
      result[result.length] = arr[i];
    }

    for (let i = start, j = 0; i < end; i += 1, j += 1) {
      const arr2 = arr;
      arr2[i] = result[j];
    }
  };

  const mergeSort = (start = 0, end = arr.length) => {
    if (end - start <= 1) {
      return;
    }

    const middle = Math.floor((start + end) / 2);

    mergeSort(start, middle);
    mergeSort(middle, end);
    merge(start, middle, end);
  };

  mergeSort();

  return arr;
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
function shuffleChar(str, iterations) {
  const { length } = str.length;

  if (length === 0 || iterations < 1) {
    return str;
  }

  let result = str;

  for (let i = 0; i < iterations; i += 1) {
    let oddChars = '';
    let evenChars = '';

    for (let j = 0; j < result.length; j += 1) {
      if (j % 2 === 0) evenChars += result[j];
      else oddChars += result[j];
    }

    result = evenChars + oddChars;

    if (result === str) {
      return shuffleChar(str, iterations % (i + 1));
    }
  }

  return result;
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
function toDigitsArr(x) {
  let num = x;
  num = num.toString();
  const numArr = [];
  for (let i = 0; i < num.length; i += 1) {
    numArr[i] = parseInt(num[i], 10);
  }
  return numArr;
}

function getNearestBigger(number) {
  const arr = toDigitsArr(number);
  const n = arr.length;

  if (n === 1) return number;

  let i = 0;
  for (i = n - 1; i > 0; i -= 1) {
    if (arr[i] > arr[i - 1]) break;
  }

  if (i !== 0) {
    for (let j = n - 1; j >= i; j -= 1) {
      if (arr[i - 1] < arr[j]) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }

  for (let j = i, k = n - 1; j < k; j += 1, k -= 1) {
    const temp = arr[j];
    arr[j] = arr[k];
    arr[k] = temp;
  }

  let result = 0;
  for (let j = 0; j < n; j += 1) {
    result = result * 10 + arr[j];
  }

  return result;
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
