import { useState, /*useEffect*/} from "react"
import Questions from "./componentes/Questions"
import StartGame from "./componentes/StartGame"
import globoBottom from "./assets/globo_bottom.png"
import globoTop  from "./assets/globo_top.png"
import dataAPI from "./dataTesteo.json"
function App() {

  const [gameStarted, setGameStarted] = useState(false)
  // const [apiData, setApiData] = useState(null)

  // const API_LINK = "https://opentdb.com/api.php?amount=5&type=multiple"

  // useEffect(() => {
  //   fetch(API_LINK)
  //     .then(res => res.json())
  //     .then(data => setApiData(data.results))
  //   const incorrect_answers = apiData.incorrect_answers
  //   const correct_answer = apiData.correct_answer
  //   const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1))
  //   const answers_together = incorrect_answers.splice(randomIndex, 0, correct_answer)
  // }, [apiData])

  // console.log(dataAPI.results);

  // const individual_resultado = dataAPI.results.map(result => result)
  // console.log(individual_resultado);
  // const incorrect_answers = dataAPI.results.incorrect_answers
  // const correct_answer = dataAPI.results.correct_answer
  // const randomIndex = Math.floor(Math.random() * (incorrect_answers.length + 1))
  // const answers_together = incorrect_answers.splice(randomIndex, 0, correct_answer)
  
  // console.log(answers_together);
  

  function flipState() {
    setGameStarted(true)
  }


  return (
    <main className="bg-fondoColor h-screen font-Inter grid items-center">
      <img src={globoBottom} className="absolute bottom-0 left-0" />
      {gameStarted ? <Questions APIdata = {dataAPI}/> : <StartGame gameStarted={gameStarted} flipState={flipState}/> }
      <img src={globoTop} className="absolute top-0 right-0" />
    </main>
  )
}

export default App
