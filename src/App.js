import './App.css';
import { useEffect, useState } from "react"

function App() {
  const [qoute, setQoute] = useState("")
  const [author, setAuthor] = useState("")

  const fetchData = async () => {
    const random_num = Math.floor(Math.random() * 1643)
    let uri = "https://type.fit/api/quotes"

    await fetch(uri)
      .then(
        response => response.json() 
      ).then(
        json => {
          let data = json[random_num] 
          console.log(data)
          setQoute(data.text)
          setAuthor(data.author)
        }
      ).catch(
        err => console.log(err, "couldnt fetch data")
      )
  }


  useEffect( () => {
    fetchData()
    // console.log("i fire once")
  }, [])
  
  return (
    <div className="App">
      <h1>Project 3: Qoute Generator</h1>
      <div className="qoute-container">
        <button onClick={() => {fetchData()}}>Next Qoute</button>
        <p><b>"{ qoute }"</b></p>
        <i>- { author }</i>
      </div>
    </div>
  );
}

export default App;
