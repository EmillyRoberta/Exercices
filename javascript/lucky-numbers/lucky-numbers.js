// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  var vet1= Number(array1.join(''));
  
  var vet2= Number(array2.join(''));

  return(vet1 + vet2); 
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    var novoValor=String(value);
    
    var reverse = novoValor.split("").reverse().join(""); //separa a string, revete ela e depois junta

    if(novoValor == reverse){
      return true;
    }
    return false;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

    if(input == '' || input == null){
      return 'Required field';
    }else if(isNaN(Number(input)) || input == '0'){
      return 'Must be a number besides 0';
    }

    return '';
}
