const tasaInteres = 0.25; // 25% de interés anual
let prestamos = [];

// Función 1: Entrada de datos
function solicitarDatos() {
    let nombre = prompt("Bienvenido al simulador de préstamos.\nPor favor, ingresa tu nombre:");
    if (nombre === null) return null; // si presiona Cancelar, sale de la función

    let monto = prompt("Ingrese el monto del préstamo en pesos:");
    if (monto === null) return null; // si presiona Cancelar

    monto = parseFloat(monto);
    if (isNaN(monto) || monto <= 0) {
        alert("Monto inválido. Intente nuevamente.");
        return null;
    }

    let cuotas = prompt("Ingrese la cantidad de cuotas (por ejemplo, 3, 6, 12):");
    if (cuotas === null) return null; // si presiona Cancelar

    cuotas = parseInt(cuotas);
    if (isNaN(cuotas) || cuotas <= 0) {
        alert("Cantidad de cuotas inválida. Intente nuevamente.");
        return null;
    }

    return { nombre, monto, cuotas };
}


// Función 2: Procesamiento de datos
function calcularPrestamo(monto, cuotas) {
    let interesTotal = monto * tasaInteres * (cuotas / 12);
    let total = monto + interesTotal;
    let valorCuota = total / cuotas;

    return { interesTotal, total, valorCuota };
}

// Función 3: Mostrar resultados
function mostrarResultado(nombre, monto, cuotas, resultado) {
    let mensaje = 
        "📊 Resultado del préstamo para " + nombre + ":\n\n" +
        "Monto solicitado: $" + monto.toFixed(2) + "\n" +
        "Cantidad de cuotas: " + cuotas + "\n" +
        "Interés total: $" + resultado.interesTotal.toFixed(2) + "\n" +
        "Monto total a pagar: $" + resultado.total.toFixed(2) + "\n" +
        "Valor de cada cuota: $" + resultado.valorCuota.toFixed(2);

    alert(mensaje);
    console.log(mensaje);
}

// Función principal
function iniciarSimulador() {
    let continuar = true;

    while (continuar) {
        let datos = solicitarDatos();
        if (datos) {
            let resultado = calcularPrestamo(datos.monto, datos.cuotas);
            mostrarResultado(datos.nombre, datos.monto, datos.cuotas, resultado);
            prestamos.push({
                nombre: datos.nombre,
                monto: datos.monto,
                cuotas: datos.cuotas,
                total: resultado.total
            });
        }

        continuar = confirm("¿Deseas simular otro préstamo?");
    }

    console.log("Resumen de préstamos realizados:", prestamos);
    alert("Gracias por usar el simulador. Revisa la consola para ver el resumen final.");
}


