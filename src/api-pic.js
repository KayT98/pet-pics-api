import React, { useState } from "react"
import "./style.css"

const GetPics= () => {
  const [fetchDog, setfetchDog] = useState('https://cdn2.thedogapi.com/images/AGwyOtfwl.jpg')
  const [fetchCat, setfetchCat] = useState('https://cdn2.thecatapi.com/images/47c.jpg')
  const [voteDog, setVoteDog] = useState(0)
  const [voteCat, setVoteCat] = useState(0)
  const [voteBoth, setVoteBoth] = useState(0)

  const getCatPic = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => {return res.json()})
      .then(data => {setfetchCat(data[0].url)})
  }
  const getDogPic = () => {
    fetch('https://api.thedogapi.com/v1/images/search')
      .then(res => {return res.json()})
      .then(data => {setfetchDog(data[0].url)})
  }

  return (
    
    <div className='container'>
            <h1>Cats & Dogs API</h1>
      <div className="imgBox">
            <h2>Random Catto Pics</h2><br></br>
        <img src={fetchCat} alt="cat"></img>
            <br></br>
            <br></br>
        <button onClick={() => getCatPic()}>Fetch More Cats!</button>
      </div>

      <div className="imgBox">
            <h2>Random Doggo Pics</h2><br></br>
        <img src={fetchDog} alt="dog"></img>
            <br></br>
            <br></br>
        <button onClick={() => getDogPic()}>Fetch More Dogs!</button>
      </div>
     
      <div className="vote">
            <h3>Which pet do you like more?</h3>
        <button className="votebtn" onClick={() => setVoteCat(voteCat + 1)}>Catto - {voteCat} votes</button>
        <button className="votebtn" onClick={() => setVoteDog(voteDog + 1)}>Doggo - {voteDog} votes</button>
        <button className="votebtn" onClick={() => setVoteBoth(voteBoth + 1)}>Both - {voteBoth} votes</button>
      </div>
    </div>
  )
}

export default GetPics