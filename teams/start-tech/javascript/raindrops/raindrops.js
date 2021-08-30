export const convert = (numeroTestado) => {
    let result = '';

    if (numeroTestado % 3 == 0) {
        result = result + "Pling";

    }
    if (numeroTestado % 5 == 0) {
        result = result + "Plang";
    }
    if (numeroTestado % 7 == 0) {
        result = result + "Plong";
    }
    if (result == '') {
        result = '' + numeroTestado;
    }
    return result;
};