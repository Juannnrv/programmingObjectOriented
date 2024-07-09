
class Personaje {
    constructor(nombre, fuerza) {
        this.nombre = nombre;
        this.fuerza = fuerza;
    }

    presentarse() {
        return `Hola, soy ${this.nombre} y mi fuerza es de ${this.fuerza} puntos.`;
    }
}

class Jedi extends Personaje {
    constructor(nombre, fuerza) {
        super(nombre, fuerza);
    }

    usarFuerza() {
        return `El Jedi está utilizando la Fuerza para proteger la galaxia.`;
    }

    entrenar() {
        this.fuerza += 10;
    }
}

class Sith extends Personaje {
    constructor(nombre, fuerza) {
        super(nombre, fuerza);
    }

    usarFuerza() {
        return `El Sith está utilizando la Fuerza para conquistar la galaxia.`;
    }

    corromper() {
        this.fuerza -= 5;
    }
}

class MaestroJedi extends Jedi {
    constructor(nombre, fuerza) {
        super(nombre, fuerza);
    }

    enseñar() {
        this.fuerza += 20;
    }
}

const yoda = new MaestroJedi('Yoda', 100);
const darthVader = new Sith('Darth Vader', 90);

document.getElementById('yodaPresentarse').addEventListener('click', () => {
    document.getElementById('yodaOutput').innerHTML = yoda.presentarse();
});

document.getElementById('yodaUsarFuerza').addEventListener('click', () => {
    document.getElementById('yodaOutput').innerHTML = yoda.usarFuerza();
});

document.getElementById('yodaEnsenar').addEventListener('click', () => {
    yoda.enseñar();
    document.getElementById('yodaOutput').innerHTML = yoda.presentarse();
});

document.getElementById('vaderPresentarse').addEventListener('click', () => {
    document.getElementById('vaderOutput').innerHTML = darthVader.presentarse();
});

document.getElementById('vaderUsarFuerza').addEventListener('click', () => {
    document.getElementById('vaderOutput').innerHTML = darthVader.usarFuerza();
});

document.getElementById('vaderCorromper').addEventListener('click', () => {
    darthVader.corromper();
    document.getElementById('vaderOutput').innerHTML = darthVader.presentarse();
});

document.getElementById('iniciarBatalla').addEventListener('click', () => {
    document.getElementById('batallaOutput').innerHTML = `<h2>¡Comienza la batalla!</h2>`;
    document.getElementById('batallaOutput').innerHTML += `<p>${yoda.nombre} VS ${darthVader.nombre}</p>`;
    
    const resultado = batalla(yoda, darthVader);

    document.getElementById('batallaOutput').innerHTML += `<p>${resultado}</p>`;
});

function batalla(personaje1, personaje2) {
    const ataque1 = personaje1.usarFuerza();
    const ataque2 = personaje2.usarFuerza();

    if (personaje1.fuerza > personaje2.fuerza) {
        return `${personaje1.nombre} ha ganado la batalla.`;
    } else if (personaje2.fuerza > personaje1.fuerza) {
        return `${personaje2.nombre} ha ganado la batalla.`;
    } else {
        return `¡La batalla terminó en empate!`;
    }
}
