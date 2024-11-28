console.log("Escribe tu nombre");
const stDin = process.openStdin();

stDin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString().trim());
    process.exit();
});
