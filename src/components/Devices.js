import React from 'react'
import './Devices.scss'
import { Tabs } from 'antd'
import Light1Status from './Light1Status/Light1Status'
import Light2Status from './Light2Status/Light2Status'
import Light3Status from './Light3Status/Light3Status'
import FanStatus from './FanStatus/FanStatus'

const { TabPane } = Tabs

const Devices = () => {
  const callback = (key) => {}

  return (
    <div className='device-container'>
      <div className='device-content'>
        <div className='device-table'>
          <Tabs defaultActiveKey='1' onChange={callback}>
            <TabPane tab='Light 1' key='1'>
              <Light1Status />
            </TabPane>
            <TabPane tab='Light 2' key='2'>
              <Light2Status />
            </TabPane>
            <TabPane tab='Light 3' key='3'>
              <Light3Status />
            </TabPane>
            <TabPane tab='Fan' key='4'>
              <FanStatus />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Devices
