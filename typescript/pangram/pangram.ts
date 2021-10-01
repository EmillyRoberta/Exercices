export function isPangram(frase: string):boolean {
  const filtrado = frase.toUpperCase().split('').filter(char => char >= 'A' && char <= 'Z');//transformou a string em um array, esta filtrando a frase

  const setFiltrado = new Set(filtrado); //todos os caracterem em maiusculos e sem ter letras repitidas, retorna um boolean

  return (setFiltrado.size == 26);
  
}
