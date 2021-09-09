// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  var soma = birdsPerDay.reduce((soma, currentElement) => soma + currentElement);
  return soma;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  var indice = (week*7)-7;
  var soma = 0;

  for(let i=indice;i<(indice+7);i++){
    soma = soma+birdsPerDay[i];
  }
  return soma;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {

  for(let i=0;i<birdsPerDay.length;i++){
    if(i %2 ==0 ){
      birdsPerDay.splice(i, 1, birdsPerDay[i]+1);
    }
  }
  return birdsPerDay;
}
