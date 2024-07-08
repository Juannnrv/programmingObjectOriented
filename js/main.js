class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido() {
        console.log(`${this.nombre} está haciendo un sonido`);
        
        return `${this.nombre} está haciendo un sonido`;
    }
}

class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    moverCola() {
        console.log(`está moviendo la cola.`);

        return `está moviendo la cola.`;
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#name").value;
    const edad = parseInt(document.querySelector("#age").value);
    const raza = document.querySelector("#breed").value;

    const animal1 = new Animal(nombre, edad);
    const sonidoAnimal = animal1.hacerSonido();

    const perro1 = new Perro(nombre, edad, raza);
    const sonidoPerro = perro1.hacerSonido();
    const accionPerro = perro1.moverCola();

    const result = document.createElement("p");

    result.textContent = raza ? `${sonidoPerro} y ${accionPerro}` : sonidoAnimal;

    document.querySelector(".result").appendChild(result);

    setTimeout(() => {
        result.remove();
    }, 5000);

    document.querySelector("#signup-form").reset();

    const header = document.createElement("h2");
    header.textContent = "Submitted!";
    document.querySelector(".header").appendChild(header);

    setTimeout(() => {
        header.remove();
    }, 3000);
});
