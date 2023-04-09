import { useState, useEffect, useContext } from 'react'
import Stack from 'react-bootstrap/Stack'

import Articles from './Articles'
import { DataContext } from '../../Context/DataContext'
import LeadersHome from './LeadersHome'


const HomePage = () => {
  let leaderboard = useContext(DataContext)
  let [newsDaily, setNews] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/news'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setNews(resData)
    }
 
    fetchData()
    const intervalId = setInterval(() => {
      fetchData()
    }, 60000)

    return () => clearInterval(intervalId)
  },[])

  const showHome = () => {
    try {
      const { currentDay, news, home } = newsDaily
      const {displayDate} = currentDay
      const { modules } = home
      // need to get home object running may be unrelieable
      return (
        <Stack gap={3}>
          <h3>{displayDate}</h3>
          <LeadersHome leaderboardData={leaderboard} />
          <Articles news={news} />
        </Stack>
      )
    } catch (error) {}
  }

  return (
    <div>
      {showHome()}
    </div>
  )
}

export default HomePage