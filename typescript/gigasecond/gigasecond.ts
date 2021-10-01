export class Gigasecond {
  private readonly giga_Date: number; //readonly é a mesma coisa que const 
  public constructor(initial_date: Date){
    this.giga_Date = initial_date.getTime();
  }
  public date(): Date{
    return new Date(this.giga_Date + 1e12);
  
  }
}
