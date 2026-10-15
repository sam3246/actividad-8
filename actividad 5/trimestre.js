//Realizar un algoritmo en JavaScript donde contenga las siguientes
//especificaciones: Ingresar nombre,
//edad, trimestre, ingresar 2 competencias, ingresar 3 notas por
//cada competencia y calcular el
//promedio. Las notas son del 1.0 al 5.0, si el promedio
//es >=3.5 aprobó la competencia. Una vez se
//calcule el promedio por la competencia, se saca el promedio
//entre las 2 y si es >=3.5 aprobó el trimestre.
// Función para solicitar y validar una nota entre 1.0 y 5.0
// Función para solicitar y validar una nota entre 1.0 y 5.0
// Solicita un texto obligatorio.
// No permite: null, vacío o únicamente espacios.
// Variable para controlar si el usuario canceló el programa
let programaCancelado = false;


// Solicita un texto obligatorio
function solicitarTextoObligatorio(mensaje) {
    while (true) {
        const valor = prompt(mensaje);

        // Si presiona "Cancelar", finalizar el programa
        if (valor === null) {
            programaCancelado = true;
            return null;
        }

        // No permitir vacío ni espacios
        if (valor.trim() !== "") {
            return valor.trim();
        }

        alert("Este campo es obligatorio. No puede quedar vacío.");
    }
}


// Solicita una edad válida
function solicitarEdad(mensaje) {
    while (true) {
        const entrada = prompt(mensaje);

        // Si presiona "Cancelar", finalizar el programa
        if (entrada === null) {
            programaCancelado = true;
            return null;
        }

        // No permitir vacío
        if (entrada.trim() === "") {
            alert("La edad es obligatoria. No puede quedar vacía.");
            continue;
        }

        const edad = Number(entrada);

        if (Number.isInteger(edad) && edad > 0) {
            return edad;
        }

        alert("Edad inválida. Debe ingresar una edad válida.");
    }
}


// Solicita una nota válida entre 1.0 y 5.0
function solicitarNota(mensaje) {
    while (true) {
        const entrada = prompt(mensaje);

        // Si presiona "Cancelar", finalizar el programa
        if (entrada === null) {
            programaCancelado = true;
            return null;
        }

        // No permitir vacío
        if (entrada.trim() === "") {
            alert("La nota es obligatoria. No puede quedar vacía.");
            continue;
        }

        const nota = Number(entrada);

        if (!isNaN(nota) && nota >= 1.0 && nota <= 5.0) {
            return nota;
        }

        alert("Nota inválida. Por favor, ingrese un valor entre 1.0 y 5.0.");
    }
}


// Función principal
function procesarTrimestre() {

    // ==========================================
    // 1. DATOS DEL ESTUDIANTE
    // ==========================================

    const nombre = solicitarTextoObligatorio(
        "Ingrese el nombre del estudiante:"
    );

    if (programaCancelado) {
        finalizarPrograma();
        return;
    }


    const edad = solicitarEdad(
        "Ingrese la edad del estudiante:"
    );

    if (programaCancelado) {
        finalizarPrograma();
        return;
    }


    const trimestre = solicitarTextoObligatorio(
        "Ingrese el trimestre actual:"
    );

    if (programaCancelado) {
        finalizarPrograma();
        return;
    }


    // ==========================================
    // 2. CONSTRUCCIÓN DEL REPORTE
    // ==========================================

    let resultadoFinal = `--- REPORTE DE CALIFICACIONES ---\n`;

    resultadoFinal += `Estudiante: ${nombre}\n`;
    resultadoFinal += `Edad: ${edad} años\n`;
    resultadoFinal += `Trimestre: ${trimestre}\n`;

    resultadoFinal +=
        `--------------------------------------------------\n`;


    let sumaPromediosCompetencias = 0;

    const TOTAL_COMPETENCIAS = 2;
    const TOTAL_NOTAS = 3;


    // ==========================================
    // 3. PROCESAR COMPETENCIAS
    // ==========================================

    for (let i = 1; i <= TOTAL_COMPETENCIAS; i++) {

        const nombreCompetencia = solicitarTextoObligatorio(
            `Ingrese el nombre de la competencia ${i}:`
        );

        // Si cancela, terminar programa
        if (programaCancelado) {
            finalizarPrograma();
            return;
        }


        let sumaNotas = 0;

        resultadoFinal +=
            `\nCompetencia ${i}: ${nombreCompetencia}\n`;


        // ==========================================
        // 4. INGRESAR NOTAS
        // ==========================================

        for (let j = 1; j <= TOTAL_NOTAS; j++) {

            const nota = solicitarNota(
                `Competencia "${nombreCompetencia}"\n` +
                `Ingrese la nota ${j} (1.0 - 5.0):`
            );

            // Si cancela, terminar programa
            if (programaCancelado) {
                finalizarPrograma();
                return;
            }


            sumaNotas += nota;

            resultadoFinal +=
                `  • Nota ${j}: ${nota.toFixed(1)}\n`;
        }


        // ==========================================
        // 5. PROMEDIO DE LA COMPETENCIA
        // ==========================================

        const promedioCompetencia =
            sumaNotas / TOTAL_NOTAS;

        sumaPromediosCompetencias += promedioCompetencia;


        const estadoCompetencia =
            promedioCompetencia >= 3.5
                ? "APROBADA"
                : "REPROBADA";


        resultadoFinal +=
            `  > Promedio Competencia: ` +
            `${promedioCompetencia.toFixed(2)} ` +
            `[${estadoCompetencia}]\n`;
    }


    // ==========================================
    // 6. PROMEDIO FINAL DEL TRIMESTRE
    // ==========================================

    const promedioTrimestre =
        sumaPromediosCompetencias / TOTAL_COMPETENCIAS;


    const estadoTrimestre =
        promedioTrimestre >= 3.5
            ? "APROBADO"
            : "REPROBADO";


    resultadoFinal +=
        `\n==================================\n`;

    resultadoFinal +=
        `PROMEDIO FINAL TRIMESTRE: ` +
        `${promedioTrimestre.toFixed(2)}\n`;

    resultadoFinal +=
        `ESTADO DEL TRIMESTRE: ¡${estadoTrimestre}!\n`;

    resultadoFinal +=
        `==================================`;


    // ==========================================
    // 7. MOSTRAR RESULTADO FINAL
    // ==========================================

    alert(resultadoFinal);


    // ==========================================
    // 8. FINALIZAR PROGRAMA
    // ==========================================

    finalizarPrograma();
}


// Función para finalizar el programa
function finalizarPrograma() {

    console.log("El programa ha finalizado.");

    // Detener la ejecución de la función actual
    return;
}


// ==========================================
// EJECUTAR PROGRAMA
// ==========================================

procesarTrimestre();

