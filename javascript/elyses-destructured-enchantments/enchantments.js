/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
  const [a, b, ...spread] = deck;
  return a;

   /* var removida;
    removida = deck.shift();
    return removida;*/
  
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(deck) {
  var carta = deck[1];
  return carta;
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
export function swapTopTwoCards(deck) {
 /* var novoArray, cartaRemovida;
  novoArray = deck;
  cartaRemovida = novoArray.shift(); //remove a primeira carta do array
  novoArray.splice(1,0,cartaRemovida); //insere a carta removida na posicão 1(a segunda posição)
  return novoArray; */

  const [firstCard, secondCard, ...rest] = deck;
  deck = [secondCard, firstCard, ...rest];
  return deck;

}

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
  var novoArray = deck.shift();

 return [novoArray, deck] ;
}

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
  var figuras = FACE_CARDS;
  var newDeck =  deck;

  if(deck.length === 0){
    figuras.unshift(undefined);
    return figuras;

  }else{
    var cartaRemovida = deck.splice(0,1);
    newDeck = cartaRemovida.concat(figuras, deck);
    return newDeck;
  }
}