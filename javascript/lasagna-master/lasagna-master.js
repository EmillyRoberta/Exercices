/// <reference path="./global.d.ts" />
// 

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(tempRes){    
    if(tempRes == 0) return "Lasagna is done.";

    if(tempRes === undefined) return "You forgot to set the timer.";

    else  return "Not done, please wait.";

}


export function preparationTime(camadas, tempo){
    if(tempo === undefined){
        return camadas.length * 2;
    }
    
    return camadas.length * tempo;
}


export function quantities(camadas){
    var lasanha= {noodles:0, 
      sauce:0
    }

    let contadorN = 0;
    let contadorS= 0;

    for(var elemento in camadas){
        if(camadas[elemento]=="noodles") contadorN++;

        else if(camadas[elemento]=="sauce") contadorS++;
    }

    var resultN = 50 * contadorN;
    var resultS = 0.2 * contadorS;

    lasanha.noodles = resultN;
    lasanha.sauce = resultS;

    return lasanha;
}


export function addSecretIngredient(listaAmigo, minhaLista){

  var elementoCopiado = listaAmigo.slice(listaAmigo.length - 1);

  var removido = elementoCopiado.pop();

  minhaLista.push(removido);
}


export function scaleRecipe(recipiente, num){
    const obj={};

    for(var ingredientes in recipiente){
        obj[ingredientes] = (recipiente[ingredientes]/2) * num;
    }
    return obj;
}