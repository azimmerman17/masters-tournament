import { useState, useEffect } from "react"
import Stack from "react-bootstrap/Stack"
import { useParams } from "react-router-dom"
import PlayerHeader from "./PlayerHeader"

const Player = () => {
  const { playerId } = useParams()
  let [playerData, setPlayerData] = useState({})
  const { golfer, bio, data } = playerData

    useEffect(() => {
      const fetchData = async () => {
        const url = `http://localhost:8080/players/${playerId}`
        const response = await fetch(url) 
        const resData = await response.json()
        if (resData) setPlayerData(resData)
      }
   
      fetchData()
      const intervalId = setInterval(() => {
        fetchData()
      },30000)
  
      return () => clearInterval(intervalId)
    },[playerId])

    if (golfer) {
      // console .log(playerData)
      return (
        <Stack gap={3} style={{width: '80%', margin: 'auto'}}>
          <PlayerHeader bio={bio} golfer={golfer} />
          {/* Scorecard */}
          {/* Bio */}
          {/* Stats */}
          {/* Past Performence */}
          player
        </Stack>
      )
    }
  }
  
export default Player