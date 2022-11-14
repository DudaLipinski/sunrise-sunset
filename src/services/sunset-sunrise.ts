import axios from 'axios'

const objectToQueryParams = (
  obj: Record<string, string | number | boolean>
) => {
  const result = []

  for (const key in obj) {
    const encodedKey = encodeURIComponent(key)
    const encodedValue = encodeURIComponent(obj[key])

    result.push(`${encodedKey}=${encodedValue}`)
  }

  return result.join('&')
}

export const getSunsetAndSunrise = (location: GeolocationPosition) => {
  const params = {
    lat: location.coords.latitude,
    lng: location.coords.longitude,
  }
  const queryParams = objectToQueryParams(params)

  return axios
    .get(`https://api.sunrisesunset.io/json?${queryParams}`)
    .then((response) => {
      return response.data.results
    })
}
