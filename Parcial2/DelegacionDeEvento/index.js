const contenedor = document.querySelector("#cont");

contenedor.addEventListener("click", (e) => {
    e.target.calssList.toggle("darkMode");
});
