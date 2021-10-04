export class Triangle {
  private ladoA:number;
  private ladoB:number;
  private ladoC:number;

  private soma1: number;
  private soma2: number;
  private soma3: number;

  public constructor(...sides: number[]) {
    this.ladoA = sides[0];
    this.ladoB = sides[1];
    this.ladoC = sides[2];

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
      if ((this.ladoA !== this.ladoB) && (this.ladoA !== this.ladoC) && (this.ladoB !== this.ladoC)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
