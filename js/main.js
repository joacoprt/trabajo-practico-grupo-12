const botonModo = document.getElementById("btn-modo");

if (botonModo) {
  botonModo.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
      botonModo.textContent = "Modo claro";
    } else {
      botonModo.textContent = "Modo oscuro";
    }
  });
}
