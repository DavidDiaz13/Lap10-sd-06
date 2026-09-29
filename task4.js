export class FriendAge {
    constructor(nombre, año, mes, dia) {
        this.nombre = nombre;
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    }

    returnAge() {
        let fechaActual = new Date();

        let añoActual = fechaActual.getFullYear();
        let edad = añoActual - this.año;

        let mesActual = fechaActual.getMonth() + 1;
        let diaActual = fechaActual.getDate();

        if (
            mesActual < this.mes ||
            (mesActual === this.mes && diaActual < this.dia)
        ) {
            edad = edad - 1;
        }

        return `${this.nombre} is ${edad} today!`;
    }
}

