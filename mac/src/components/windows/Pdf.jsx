import React from 'react'
import MacWindow from './MacWindow'
const pdf = ({windowName,windowsState, setwindowsState}) => {
  return (
    <div>
        <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>

        </MacWindow>
    </div>
  )
}

export default pdf