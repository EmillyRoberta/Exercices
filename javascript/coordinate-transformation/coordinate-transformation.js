//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {

    function moveCoordinatesRight (x, y) {
      return [x + dx, y + dy];
    };
    return moveCoordinatesRight;
  }

  
  // return (x, y) =>([x + dx, y + dy]);


/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {

  function doubleScale(x,y){
    return [sx*x, sy*y]
  }
  return doubleScale;
  
}

/**
 * Create a composition function which returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  
  return (x,y)=>g(...f(x,y));
  
}

/**
 * Return a function which memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes and x, y argument, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  var xAntigo = undefined, yAntigo = undefined;
  var resultadoAntigo;

  return function(x,y){
    if(x===xAntigo && y==yAntigo){
      return resultadoAntigo;
    }
    xAntigo = x;
    yAntigo=y;
    resultadoAntigo = f(x,y);

    return resultadoAntigo;
  }
}
