//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//




export const age = (planeta, idade) => {

  var valor;
  const anoTerrestre= 31557600;
  var resultado;

if(planeta === "mercury"){
  valor = 0.2408467;
}
else{
  if(planeta == "venus"){
    valor = 0.61519726;
  }
  else{
    if(planeta === "earth"){
       valor = 1;
    
    }else{
      if(planeta == "mars"){
        valor = 1.8808158;
      }else{
        if(planeta == 'jupiter'){
          valor = 11.862615;
        }else{
          if(planeta == "saturn"){
            valor = 29.447498;
          }else{
            if(planeta == "uranus"){
              valor = 84.016846;
            }else{
              if(planeta == "neptune"){
                valor = 164.79132;
              }
            }
          }

        }
      }
    }
  }
}

resultado = parseFloat((idade/anoTerrestre/valor).toFixed(2));;
return resultado;

};

