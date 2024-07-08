
class Figura {
    constructor(color) {
        this.color = color;
        this.area = 0;
    }

    calcularArea() {
        return this.area;
    }
}

class Rectangulo extends Figura {
    constructor( color, largo, ancho) {
        super(color);
        this.largo = parseFloat(largo);
        this.ancho = parseFloat(ancho);
    }

    calcularArea() {
        this.area = this.largo * this.ancho;
        return this.area;
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    const color = document.querySelector("#color").value;
    const largo = document.querySelector("#largo").value;
    const ancho = parseFloat(document.querySelector("#ancho").value);

    const rectangulo1 = new Rectangulo(color, largo, ancho);
    const area = rectangulo1.calcularArea();

    const result = document.createElement("p");
    result.textContent = `El rectangulo de color ${color} tiene un área de ${area.toFixed(2)}m².`;
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
