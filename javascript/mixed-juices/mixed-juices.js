// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {

    case 'Pure Strawberry Joy':
      return 0.5;

    case 'Energizer':
      return 1.5;

    case 'Green Garden':
      return 1.5;

    case 'Tropical Island':
      return 3;

    case 'All or Nothing':
      return 5;

    default:
      return 2.5;
  }

}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  
  let index=0;
  var wedges = wedgesNeeded;
  

  while (wedges > 0) {
    let lime = limes [index++];

    switch(lime) {
      case 'small':
        wedges -= 6;
        break;
      case 'medium':
        wedges -= 8;
        break;
      case 'large':
        wedges -= 10;
        break;
      default:
        return index - 1;
    }
   
  }

  return index;
}



/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft //tempoRestante
 * @param {string[]} orders //vetor
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  var resultado = 0;
  var i = 0; 

  while(resultado < timeLeft){
  resultado += timeToMixJuice(orders[i]);
  i++
  }
  return orders.slice(i);
}