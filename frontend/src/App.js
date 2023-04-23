import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataContext } from './Context/DataContext'

import './App.css';
import NavBar from './Components/Headers/Navbar';
import Leaders from './Components/Headers/Leaders';
import Alerts from './Components/Headers/Alerts';
import HomePage from './Components/Home/HomePage'
import CourseIndex from './Components/Course/CourseIndex';
import Hole from './Components/Course/Hole';
import PlayersIndex from './Components/Players/PlayersIndex';
import Player from './Components/PlayerDetails/Player';

function App() {
  let [data, setdata] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/leaderboard'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setdata(resData)
    }
 
    fetchData()
    const intervalId = setInterval(() => {
      fetchData()
    },30000)

    return () => clearInterval(intervalId)
  },[])
  
  return (
    <div className='App'>
      <DataContext.Provider value={data}>
        <Router>
          <header>
            <Alerts />
            <Leaders />
            <NavBar />
          </header>
          <main className="p-3">
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              {/* <Route path='/leaderboard' /> */}
              <Route path='/players' element={<PlayersIndex />}/>
              <Route path='/players/:playerId' element={<Player />} />
              <Route path='/course' element={<CourseIndex />}/>
              <Route path='/course/:holeId' element={<Hole />}/>
            </Routes>
          </main>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
