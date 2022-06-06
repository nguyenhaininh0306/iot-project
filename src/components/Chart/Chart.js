import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Chart = () => {
  const [dataTemp, setDataTemp] = useState([])

  useEffect(() => {
    onValue(ref(db, 'IOT-DEVICES/dht11'), (snapshot) => {
      const data = snapshot.val()
      Object.values(data).map((item) => {
        setDataTemp((oldArray) => [...oldArray, item])
      })
    })
  }, [])

  const dataDB = dataTemp.slice([dataTemp.length - 21], [dataTemp.length - 1])

  var data = {
    labels: dataDB?.map((x) => x.time),
    datasets: [
      {
        label: `${dataDB?.length} value of Temp`,
        data: dataDB?.map((x) => x.temp),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div>
      <Line data={data} height={400} options={options} width={1200} />
    </div>
  )
}

export default Chart
