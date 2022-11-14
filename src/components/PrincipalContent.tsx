import { Breadcrumb, Layout } from 'antd'
import { useEffect } from 'react'
import { getSunsetAndSunrise } from '../services/sunset-sunrise'
const { Content } = Layout

const PrincipalContent = () => {
  const showLocation: PositionCallback = async (position) => {
    const sunsetAndSunrise = await getSunsetAndSunrise(position)
    console.log(sunsetAndSunrise) // [XXX] REMOVE BEFORE COMMITING
  }

  useEffect(() => {}, [])

  function errorHandler(err: any) {
    if (err.code === 1) {
      alert('Error: Access is denied!')
    } else if (err.code === 2) {
      alert('Error: Position is unavailable!')
    }
  }

  function getLocation() {
    if (navigator.geolocation) {
      const options = { timeout: 60000 }
      navigator.geolocation.getCurrentPosition(
        showLocation,
        errorHandler,
        options
      )
    } else {
      alert('Sorry, browser does not support geolocation!')
    }
  }

  return (
    <Layout className="layout">
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <button onClick={getLocation}>Get location</button>
        </div>
      </Content>
    </Layout>
  )
}

export default PrincipalContent
