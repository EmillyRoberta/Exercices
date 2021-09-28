// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  var contador =0;
  stack.forEach(item=> {
    if(item == card){
      contador ++;
    }
  });
  return contador;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
var contador =0;

  if(type == true){
    for(let item of stack){
      if(item %2 == 0){
        contador ++;
      }
    }
  }
  else{
    for(let item of stack){
      if(item %2 != 0){
        contador ++;
      }
    }
  }
  return contador;
}
