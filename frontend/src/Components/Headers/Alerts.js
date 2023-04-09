import { useState, useEffect } from "react"
// need to see an alert to verify

const Alerts = () => {
  let [alert, setAlert] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:8080/alerts'
      const response = await fetch(url) 
      const resData = await response.json()
      if (resData) setAlert(resData)
    }

    fetchData()
    const intervalId = setInterval(() => {
      fetchData()
    },30000)

    return () => clearInterval(intervalId)
  },[])

  const alertMessage = () => {
    if (alert !== {}) {
      const { link, title, linkText } = alert
      return <h6 className="p-1"><a href={link} target='_blank' rel='noreferrer'>{linkText || title}</a></h6>
    }
    return <p>NO ALERT</p>
  }

  return (
    <div>
      {alertMessage()}
    </div>
  )
}

export default Alerts
