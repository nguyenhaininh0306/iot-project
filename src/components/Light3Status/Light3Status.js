import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config'

const Light3Status = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    onValue(ref(db, 'IOT-DEVICES/led3'), (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        setData(data)
      }
    })
  }, [])
  return (
    <div>
      <table>
        <tr>
          <th>Status</th>
          <th>Date</th>
        </tr>
        <tr>
          {data.status === true ? <td>On</td> : <td>Off</td>}
          <td>{data.time}</td>
        </tr>
      </table>
    </div>
  )
}

export default Light3Status
