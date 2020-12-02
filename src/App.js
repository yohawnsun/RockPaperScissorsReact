
import React, { useState } from 'react'
import { createPortal } from 'react-dom'


const Hands = (props) => {

  const [currentValue, setCurrentValue] = useState(0)

  const playGame = () => {
    props.playTheGameOnParentLevel(props.shortName)
  }
  return (

    <div className={props.class} data-interval={false}>
      <img src={props.pic} onClick={playGame} />
    </div>
  )
}

export default () => {

  const [items, setItems] = useState([
    { id: 1, name: "rock", short: "r", src: "http://www.pontusweb.se/rock.png", class: "carousel-item active", picture: "rock.png" },
    { id: 2, name: "paper", short: "p", src: "http://www.pontusweb.se/paper.png", class: "carousel-item", picture: "paper.png" },
    { id: 3, name: "scissors", short: "s", src: "http://www.pontusweb.se/scissors.png", class: "carousel-item", picture: "scissors.png" }

  ])
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)
  const [computerPic, setComputerPic] = useState("http://pontusweb.se/unnamed.png");
  const [computerChoice, setComputerChoice] = useState()
  const whoWon = (player, computer) => {
    if (player === computer)
      return "Draw!"
    if (player === "r" && computer === "s" || player === "s" && computer === "p" || player === "p" && computer === "r")
      return "Player"
    return "Computer"
  }
  const playTheGame = (playerChoice) => {
    let computerHand = items[Math.floor(Math.random() * 3)]
    setComputerChoice(computerHand.short)
    let won = whoWon(playerChoice, computerChoice)
    if (won === "Player")
      setPlayerScore(playerScore + 1)
    if (won === "Computer")
      setComputerScore(computerScore + 1)

    setComputerPic(computerHand.src)
  }

  const reset = () => {
    setPlayerScore(0)
    setComputerScore(0)
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="buttonreset"> <button id="rest" onClick={reset} className="btn btn-dark">Reset game</button></div>
        <div id="scoreboard">

          <div className="column" id="playerscore">Player:{playerScore}</div>
          <div className="column" id="computerscore">Computer:{computerScore}</div>

        </div>
      </div>
      <div className="container2">
        <div className="choices">
          <h4>Choose your hand!</h4>
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {items.map(x => <Hands playTheGameOnParentLevel={playTheGame} name={x.name} shortName={x.short} pic={x.src} class={x.class} />)}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div></div>
        <hr />
        <div className="container3">
  <div className="left"><h4>Computer hand:</h4></div>
  <div className="right"> <img src={computerPic} id="computerpic"/></div>
</div>
      </div>
    </React.Fragment>
  )

}


