//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (initialDate) => {
  var dateConvert = initialDate.getTime();
  var result = dateConvert + 1e9 * 1000; //somando o objetivo
  return new Date(result); //transformando o numero de milisegundos para um objeto date
};
