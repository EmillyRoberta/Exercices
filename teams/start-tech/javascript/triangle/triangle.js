//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(p_ladoA, p_ladoB, p_ladoC) {
    this.ladoA = p_ladoA;
    this.ladoB = p_ladoB;
    this.ladoC = p_ladoC;

    this.soma1 = this.ladoA + this.ladoB;
    this.soma2 = this.ladoA + this.ladoC;
    this.soma3 = this.ladoB + this.ladoC;

  }

  get isEquilateral() {
    if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
      if (this.ladoA == this.ladoB && this.ladoA == this.ladoC) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  get isIsosceles() {

    if (this.ladoA > 0 && this.ladoB > 0 && this.ladoC > 0) {
      if ((this.soma1 >= this.ladoC) && (this.soma2 >= this.ladoB) && (this.soma3 >= this.ladoA)) {

        if (this.ladoA == this.ladoB) {
          return true;
        } else {
          if (this.ladoA == this.ladoC) {
            return true;
          } else {
            if (this.ladoB == this.ladoC) {
              return true;
            } else {
              return false;
            }
          }
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


  get isScalene() {

    if ((this.soma1 >= this.ladoC) && (this.soma2 >= this.ladoB) && (this.soma3 >= this.ladoA)) {
      if ((this.ladoA !== this.ladoB) && (this.ladoA !== this.ladoC) && (!this.ladoB !== this.ladoC)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
