import { Hour } from '../types/Hour'

interface Props {
  sunsetSunriseTimes: Hour
}

const SunsetSunrise = ({ sunsetSunriseTimes }: Props) => {
  if (!sunsetSunriseTimes.sunset) {
    return <p>Waiting Location</p>
  }
  return (
    <>
      <h2>Sunset</h2>
      <p>{sunsetSunriseTimes.sunset}</p>
      <h2>Sunrise</h2>
      <p>{sunsetSunriseTimes.sunrise}</p>
      <h2>Timezone</h2>
      <p>{sunsetSunriseTimes.timezone}</p>
    </>
  )
}

export default SunsetSunrise
