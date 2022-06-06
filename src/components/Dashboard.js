import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.min.css'
import { Switch } from 'antd'
import light from '../assets/image/light.jpg'
import fan from '../assets/image/fan.png'
import { db } from '../firebase/config'
import { set, ref, onValue } from 'firebase/database'
import moment from 'moment-timezone'
import './Dashboard.scss'
import Chart from './Chart/Chart'
import Clock from './Clock'

const Dashboard = () => {
  const status1 = onValue(ref(db, 'IOT-DEVICES/led1'), (snapshot) => {
    const data = snapshot.val().status
    return data
  })

  const status2 = onValue(ref(db, 'IOT-DEVICES/led2'), (snapshot) => {
    const data = snapshot.val().status
    return data
  })

  const status3 = onValue(ref(db, 'IOT-DEVICES/led2'), (snapshot) => {
    const data = snapshot.val().status
    return data
  })

  const fanS = onValue(ref(db, 'IOT-DEVICES/fan'), (snapshot) => {
    const data = snapshot.val().status
    return data
  })

  const [statusLight1, setStatusLight1] = useState(status1 || false)
  const [statusLight2, setStatusLight2] = useState(status2 || false)
  const [statusLight3, setStatusLight3] = useState(status3 || false)
  const [statusFan, setStatusFan] = useState(fanS || false)
  const [temp, setTemp] = useState('')
  const [hum, setHum] = useState('')

  let timeZone = moment.tz('Asia/Ho_Chi_Minh')
  let date = timeZone.format('DD/MM/YYYY')
  let time = timeZone.format('HH:mm')
  let dateTime = date + ', ' + time

  const onChangeToggleLight1 = (checked) => {
    set(ref(db, 'IOT-DEVICES/led1'), {
      status: checked,
      time: dateTime,
    })
    setStatusLight1(checked)
  }

  const onChangeToggleLight2 = (checked) => {
    set(ref(db, 'IOT-DEVICES/led2'), {
      status: checked,
      time: dateTime,
    })
    setStatusLight2(checked)
  }

  const onChangeToggleLight3 = (checked) => {
    set(ref(db, 'IOT-DEVICES/led3'), {
      status: checked,
      time: dateTime,
    })
    setStatusLight3(checked)
  }

  const onChangeToggleFan = (checked) => {
    set(ref(db, 'IOT-DEVICES/fan'), {
      status: checked,
      time: dateTime,
    })
    setStatusFan(checked)
  }

  useEffect(() => {
    onValue(ref(db, 'IOT-DEVICES/led1'), (snapshot) => {
      const data = snapshot.val().status
      setStatusLight1(data)
    })

    onValue(ref(db, 'IOT-DEVICES/led2'), (snapshot) => {
      const data = snapshot.val().status
      setStatusLight2(data)
    })

    onValue(ref(db, 'IOT-DEVICES/led3'), (snapshot) => {
      const data = snapshot.val().status
      setStatusLight3(data)
    })

    onValue(ref(db, 'IOT-DEVICES/fan'), (snapshot) => {
      const data = snapshot.val().status
      setStatusFan(data)
    })

    onValue(ref(db, 'IOT-DEVICES'), (snapshot) => {
      const data = snapshot.val().temp
      setTemp(data)
    })

    onValue(ref(db, 'IOT-DEVICES'), (snapshot) => {
      const data = snapshot.val().hum
      setHum(data)
    })
  }, [])

  return (
    <div className='dashboard-container'>
      <div className='dashboard-content'>
        <div className='temp-hum'>
          <div className='temp'>
            <div className='temp-title'>Temp and Hum</div>
            <div className='temp-value'>Temp: {temp} &#8451; </div>
            <div className='hum-value'>Hum: {hum} g/m&#179;</div>
          </div>
          <div className='date'>
            <div className='date-title'>Date</div>
            <div className='day-value'>Day: {date}</div>
            <div className='time-value'>
              Time: <Clock />
            </div>
          </div>
        </div>

        <div className='devices'>
          <div className='light'>
            <div className='image'>
              <img src={light} alt='light 1' />
            </div>
            <div className='action'>
              <div className='light-title'>Light 1</div>
              <div className='toggle'>
                <Switch
                  checked={statusLight1}
                  onChange={onChangeToggleLight1}
                />
              </div>
            </div>
          </div>
          <div className='light'>
            <div className='image'>
              <img src={light} alt='light 2' />
            </div>
            <div className='action'>
              <div className='light-title'>Light 2</div>
              <div className='toggle'>
                <Switch
                  checked={statusLight2}
                  onChange={onChangeToggleLight2}
                />
              </div>
            </div>
          </div>
          <div className='light'>
            <div className='image'>
              <img src={light} alt='light 3' />
            </div>
            <div className='action'>
              <div className='light-title'>Light 3</div>
              <div className='toggle'>
                <Switch
                  checked={statusLight3}
                  onChange={onChangeToggleLight3}
                />
              </div>
            </div>
          </div>
          <div className='fan'>
            <div className='image'>
              <img src={fan} alt='fan' />
            </div>
            <div className='action'>
              <div className='light-title'>Fan</div>
              <div className='toggle'>
                <Switch checked={statusFan} onChange={onChangeToggleFan} />
              </div>
            </div>
          </div>
        </div>

        <div className='chart'>
          <h1>Realtime Temperature</h1>
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
