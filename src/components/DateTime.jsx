import React, { useEffect, useState } from 'react'

// returns formatted date/time string without commas similar to macOS clock
function formatMacDateTime(date) {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  // macOS often shows e.g. "February 27 2026 10:30:15 AM" without commas
  return `${month} ${day} ${year} ${hours}:${minutes}:${seconds} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return <div className="datetime">{formatMacDateTime(now)}</div>
}

export default DateTime