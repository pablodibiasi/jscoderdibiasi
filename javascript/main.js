//juego de adivinanza de animales
let animal1 = prompt('jugador 1 ingrese el animal a adivinar')

for (let i = 1; i <= 3; i++) {
  let animal2 = prompt('jugador 2 ingrese su respuesta')

  if (animal1 === animal2) {
    alert('adivinaste era un/a ' + animal1)
    break
  } else if (i != 3) {
    alert('tenes otra oportunidad')
  } else alert('perdiste')
}
