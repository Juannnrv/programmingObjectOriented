
class Figura {
    constructor(color) {
        this.color = color;
        this.area = 0;
    }

    calcularArea() {
        return this.area;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }

    calcularArea() {
        this.area = Math.PI * Math.pow(this.radio, 2);
        return this.area;
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    const color = document.querySelector("#color").value;
    const radio = parseFloat(document.querySelector("#radio").value);

    const circulo = new Circulo(color, radio);
    const area = circulo.calcularArea();

    const result = document.createElement("p");
    result.textContent = `El círculo de color ${color} tiene un área de ${area.toFixed(2)}m².`;
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
