export function ageCalculator(año,mes,dia) {
    let fechaactual = new Date();
    let añoactual = fechaactual.getFullYear();
    let edad = añoactual - año;
    let mesactual = fechaactual.getMonth() + 1;
    let diaactual = fechaactual.getDate();
    if (mesactual < mes || (mesactual === mes && diaactual < dia)) {
        edad--;
    }
    return edad;
}