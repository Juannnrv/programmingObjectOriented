class Persona {
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }

    saludar() {
        console.log(`Hey, soy ${this.nombre}, tengo ${this.edad} años y soy ${this.sexo}`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }

    estudiar() {
        console.log(`Estoy estudiando ${this.carrera}`);
    }
}

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();
    
    const nombre = document.querySelector("#name").value;
    const edad = parseInt(document.querySelector("#age").value);
    const sexo = document.querySelector("#sex").value;
    const carrera = document.querySelector("#career").value;

    if (carrera) { // Si se ingresó una carrera en el form 
        const estudiante = new Estudiante(nombre, edad, sexo, carrera);
        estudiante.saludar();
        estudiante.estudiar();
    } else {
        const persona = new Persona(nombre, edad, sexo);
        persona.saludar();
    }

    const esMayor = Persona.esMayorDeEdad(edad);
    console.log(`¿${nombre} es mayor de edad? ${esMayor ? 'si' : 'no'}`);

    const header = document.createElement("h2");
    header.textContent = "Submitted !";
    document.querySelector(".header").appendChild(header);
    
    setTimeout(() => {
        header.remove();
    }, 3000);   

    document.querySelector("#signup-form").reset();

    const result = document.createElement("p")

    if (carrera) {
        result.textContent = `Hey, soy ${nombre}, tengo ${edad} años, soy ${sexo}, estudio ${carrera} y ${esMayor ? 'si' : 'no'} soy mayor de edad`;
    } else {
        result.textContent = `Hey, soy ${nombre}, tengo ${edad} años, soy ${sexo} y ${esMayor} soy mayor de edad`;
    }

    document.querySelector(".result").appendChild(result);

    setTimeout(() => {
        result.remove();
    }, 5000); 

});
