// Paired Programming Exercise - W2D3 - collaboration with: Alex Da Costa - @BSMuse | github.com/BSMuse //

const wordSearch = (letters, word) => { // defined a function to iterate through the letters and word of the array of arrays;

  const lettersFlipped = transpose(letters); // variable showing the results of the transposed function on the input letters;

  const letterByLetter = (letters, word) => {   // function that iterates through each letter on the grid (row, columns);
      for (let j = 0; j < letters.length; j++) { // iterates through the letters in the rows;
          for (let i = 0; i < letters[j].length; i++) { // interate through the letters on in the columns;
              let k = 0; 

              while (letters[j][i] === word[k]) { // the letters that have been iterated through (rows, columns) match the letters in the word; continue the loop;
                  k++ // adding those letters together as they're found      // k++ allows you to add to a total (like + 1); can use it for iterating and counting;
                  if (k === word.length) { // if the found letters match the word (being searched for)'s length, function stops as the value is Truthy;
                      return true;
                  }
                  i++ // adding those letters (for the columns)
              }
          }
      }
      return false; // the word was not found in any row
  }
   
const result1 = letterByLetter(letters, word); // log result1 = of checking the letters row by row and comparing to the word wanted;
const result2 = letterByLetter(lettersFlipped, word); // log result1 = of checking the letters column by column and comparing to the word wanted;

  return result1 || result2; // return which-ever result is true (if the word was found horizontally or vertically);
}

const transpose = function (letters) { // a function to iterate through the grid format, and flip the letters to read them vertically;
  const numRows = letters.length;
  const numCols = letters[0].length;
  
  const flippedLetters = []; // empty array to have the below function push results into;
  
  for (let j = 0; j < numCols; j++) { // iterate through the grids row 
    flippedLetters.push([]);          // pushing the letters into a column (flipping 90degress)
    for (let i = 0; i < numRows; i++) {       // iterate through the girds column
      flippedLetters[j].push(letters[i][j]);  // pushing the letters into a row (flipping 90degrees);
    }
  }
  
  return flippedLetters; // return the new array of the flippedLetters;
};


module.exports = wordSearch;