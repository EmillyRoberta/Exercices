//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (ano) => {
  const divisivel4 = ano %4 == 0;
  const divisivel100 = ano % 100 == 0;
  const divisivel400 = ano % 400 == 0;

  const anoBissexto = divisivel4 && !divisivel100 || divisivel400;
  
  return anoBissexto;
  

};
