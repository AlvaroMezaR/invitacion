// Función para actualizar el contador
function updateCountdown() {
    // Definir la fecha de la boda (29 de noviembre de 2025 a la 13:00)
    const weddingDate = new Date("2025-11-29T15:00:00").getTime();
    
    // Obtener la fecha y hora actual
    const now = new Date().getTime();
    
    // Calcular la diferencia entre la fecha de la boda y la fecha actual
    const diff = weddingDate - now;

    // Si la fecha ya pasó, mostrar un mensaje
    if (diff <= 0) {
        document.getElementById("contador").innerHTML = "¡Es el gran día!";
        document.getElementById("dias").textContent = "0";
        document.getElementById("horas").textContent = "0";
        document.getElementById("minutos").textContent = "0";
        document.getElementById("segundos").textContent = "0";
    } else {
        // Calcular los días, horas, minutos y segundos restantes
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        // Mostrar los resultados en los elementos correspondientes
        document.getElementById("dias").textContent = days;
        document.getElementById("horas").textContent = hours;
        document.getElementById("minutos").textContent = minutes;
        document.getElementById("segundos").textContent = seconds;
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Llamar la función para mostrar el contador inicialmente
updateCountdown();
