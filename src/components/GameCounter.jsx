import React from 'react'

const GameCounter = (props) => {

if(props.completed === props.total){
  document.getElementById("titulo").innerHTML = "Felicidades haz acompletado todos  tus juegos, Hora de comprar mas :)";
}

  return (
    <h2 id = "titulo" className = 'GameCounter'>
        Haz completado <span>{props.completed}</span> de <span>{props.total}</span> juegos de tu lista.
    </h2>
  )
}

export default GameCounter