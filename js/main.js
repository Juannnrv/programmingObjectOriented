
class Vehiculo {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    acelerar() {
        this.velocidad += 10;
        return this.velocidad;
    }

    static convertirKmHEnMph(velocidad) {
        return velocidad / 1.60934;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, velocidad, combustible) {
        super(marca, modelo, velocidad);
        this.combustible = combustible;
    }

    acelerar() {
        this.velocidad += 20;
        return this.velocidad;
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const velocidad = parseFloat(document.querySelector("#velocidad").value);
    const combustible = document.querySelector("#combustible").value

    const vehiculo1 = new Vehiculo(marca, modelo, velocidad);
    vehiculo1.acelerar();
    const velocidadVehiculoMph = Vehiculo.convertirKmHEnMph(vehiculo1.velocidad);

    const coche1 = new Coche(marca, modelo, velocidad, combustible);
    coche1.acelerar();
    const velocidadCocheMph = Vehiculo.convertirKmHEnMph(coche1.velocidad);

    const result = document.createElement("p");
    result.innerHTML = /*html*/`
        La velocidad actual del vehículo ${marca}, ${modelo} es de ${vehiculo1.velocidad} km/h (${velocidadVehiculoMph.toFixed(2)} mph).<br><br>
        La velocidad actual del coche ${marca}, ${modelo} con combustible ${combustible} es de ${coche1.velocidad} km/h (${velocidadCocheMph.toFixed(2)} mph).
    `;
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
