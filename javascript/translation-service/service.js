/// <reference path="./global.d.ts" />



// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//
// In your own projects, files, and code, you can play with @ts-check as well.

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  async free(text) {
/*
    return new Promise((resolve,reject)=>{  // .fetch: vai buscar na API e me retornar uma outra Promise que contém uma tradução (não sei quando)
      this.api.fetch(text) 

        .then(result=> resolve(result.translation))  // .then: registra um callback -> quando tiver um resultado, rode...
        .catch(error => reject(error));     // .catch: registra outro callback -> caso dê erro, chame...

      })*/

      var resultado;

      resultado = await this.api.fetch(text);
      return resultado.translation;
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
  async batch(texts) {

  /*
    return new Promise((resolve,reject) =>{

      if( !texts || texts.length == 0 ){
        reject(new BatchIsEmpty());
      }
      let promise = [];

      for(let i =0;i< texts.length;i++){
        promise.push(this.api.fetch(texts[i]));

      }
     
      return Promise.all(promise).then(result => resolve(result.map(item => item.translation)))
      .catch(error => reject(error));

    })*/
    var vet = [];
    if(texts === null || texts.length == 0){
      throw new BatchIsEmpty();
    } else{
      for(var item of texts){
        var traduzido = await this.api.fetch(item);
        vet.push(traduzido.translation); 
      }
    }   
    return vet;
  }

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  request(text) {
    return new Promise((resolve, reject) => {
      let ultimoErro;
      this.api.request(text, error => {
        if(error == null)
          resolve(undefined);
        else{
         // ultimoErro = error;
         this.api.request(text, error2 =>{
           if(error2 == null)
           resolve(undefined);

           else{
             this.api.request(text, error3 => {
               if(error3 == null)
               resolve(undefined);

               else{
                 reject(error3);
               }
             })
           }
         })
        }
    
      })
});
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  premium(text, minimumQuality) {
    throw new Error('Implement the premium function');
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim()
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim()
    );
  }
}
