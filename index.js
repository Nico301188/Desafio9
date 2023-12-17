let personaje;
// -----------------------------------------con este codigo resuelvo el punto 1
// personaje = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
// console.log(personaje)

function span(personaje) {

    const persona = document.getElementsByTagName("SPAN")

    switch (personaje) {
        case
            "Mario":
            persona[0].innerHTML = "Mario"
            valido(personaje)
            break
        case
            "Luigi": persona[0].innerHTML = "Luigi"
            valido(personaje)
            break
        case
            "Bowser": persona[0].innerHTML = "Bowser Morton Koopa"
            valido(personaje)
            break
        case
            "Peach": persona[0].innerHTML = "Princesa Peach Toadstool"
            valido(personaje)
            break
        case
            "Yoshi": persona[0].innerHTML = "T. Yoshisaur Munchakoopas"
            valido(personaje)
            break
        case
            "Toad": persona[0].innerHTML = "Toad"
            valido(personaje)
            break
        case
            "Toadette": persona[0].innerHTML = "Toadette"
            valido(personaje)
            break
        case
            "Daisy": persona[0].innerHTML = "Princesa Daisy"
            valido(personaje)
            break;

        default:
            persona[0].innerHTML = "(desconocido)"
            break;
    }
}
//  -------------------------------con esto resuelvo el punto 1
span(personaje)

function valido(personaje) {
    let personajeMinuscula = personaje.toLowerCase();
    let presenta = document.getElementById(personajeMinuscula)
    presenta.title = "Presentado"
}

// ---------------------punto 6
function btnClick() {
    let btn = document.querySelector('.btn')
    // btn.classList.remove('hover');
    btn.style = "border: inset #000";
    debugger
    setTimeout(function name(params) {
        // btn.classList = '.btn';
        personaje = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
        console.log(personaje)
        span(personaje)
        // btn.style="border: outset";
        btn.style.visibility = 'hidden';
    }, 1000);
}