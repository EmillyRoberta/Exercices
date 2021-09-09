//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { kMaxLength } from "buffer";

export class Squares {
  constructor(p_num) {
    this.num = p_num;

    var result1;
    this.result1=result1;

    var result2;
    this.result2=result2;
  }

  get sumOfSquares() {
   
    for(let i=1;i<=this.num;i++){
    this.result1 = this.result1 + i;
    }
    this.result1 = parseInt(Math.pow(this.result1, 2), 10);
    return this.result1;
  }

  get squareOfSum() {
    for(let i=1;i<=this.num;i++){
      this.result2 = this.result2 + Math.pow(i,2);
    }
    return this.result2;
  }

  get difference() {
    var diferenca;
    diferenca = this.sumOfSquares - this.squareOfSum;
    return diferenca;
  }
}
