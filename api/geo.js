export default async function handler(req, res) {
    const { city } = req.query

    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`
    )
    const data = await response.json()
    req.json(data)
}