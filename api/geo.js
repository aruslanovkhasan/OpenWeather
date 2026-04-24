module.exports = async function handler(req, res) {
    const { city } = req.query

    const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`
    )
    const data = await response.json()
    res.json(data)
}