
class Empleado {
    static idEmpleado = 0;

    constructor(nombre, edad, sueldo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.id = Empleado.generarIdEmpleado();
    }

    calcularSalarioAnual() {
        return this.sueldo * 12;
    }

    static generarIdEmpleado() {
        return ++Empleado.idEmpleado;
    }
}

class Gerente extends Empleado {
    constructor(nombre, edad, sueldo, departamento) {
        super(nombre, edad, sueldo);
        this.departamento = departamento;
    }

    calcularSalarioAnual() {
        const bono = this.sueldo * 0.10;
        return (this.sueldo + bono) * 12;
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value;
    const edad = parseInt(document.querySelector("#edad").value);
    const sueldo = parseFloat(document.querySelector("#sueldo").value);
    const departamento = document.querySelector("#departamento").value;

    const result = document.createElement("p");

    if (departamento) { // Si se ingresó un departamento en el formulario
        const gerente1 = new Gerente(nombre, edad, sueldo, departamento);
        const salarioAnualGerente = gerente1.calcularSalarioAnual();
        result.textContent = `Gerente ${gerente1.nombre}, ID: ${gerente1.id}, del departamento ${gerente1.departamento}, tiene un salario anual de ${salarioAnualGerente.toFixed(2)}.`;
    } else {
        const empleado1 = new Empleado(nombre, edad, sueldo);
        const salarioAnualEmpleado = empleado1.calcularSalarioAnual();
        result.textContent = `Empleado ${empleado1.nombre}, ID: ${empleado1.id}, tiene un salario anual de ${salarioAnualEmpleado.toFixed(2)}.`;
    }

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
