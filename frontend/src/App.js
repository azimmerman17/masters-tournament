import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataContext } from './Context/DataContext'

import './App.css';
import NavBar from './Components/Headers/Headers/Navbar';
import Leaders from './Components/Headers/Headers/Leaders';

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
            <Leaders />
            <NavBar />
          </header>
          <main className="p-3" style={{marginTop: '75px'}}>
            <h1>Masters</h1>
            <Routes>
              {/* <Route exact path='/' /> */}
              {/* <Route path='/leaderboard' />
              <Route path='/players' />
              <Route path='/course' /> */}
            </Routes>
          </main>
        </Router>
      </DataContext.Provider>
    </div>
  );
}

export default App;
