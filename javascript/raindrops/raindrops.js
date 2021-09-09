//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (numero) => {
  var som = ''; 
  palavra = '';
  som = numero;
  if(numero %3 == 0){
    som = som + "Pling";
  }
  if(numero %5 == 0){
    som = som + "Plang";
  }
  if(numero %7 == 0){
    som = som + "Plong";
  }
  if(numero == ''){
    som = '' + numero;
  }
  return som;
};
