type dnaBase = keyof typeof dnaBasis;

export function toRna(dna: string): string  {

  let result = '';

  for(const elemento of dna){
    if(!(elemento in dnaBasis)){ //verifica se não tem os elementos
      throw new Error ('Invalid input DNA.');
    }
    result +=  dnaBasis[<dnaBase>elemento]; //transforma o elemento que é do tipo string em dnaBase 
  }
  return result;
}
 
enum dnaBasis {
  G = 'C',
  C = 'G',
  T = 'A',
  A = 'U',
}
