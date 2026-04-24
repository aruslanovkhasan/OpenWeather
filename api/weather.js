module.exports = async function handler(req, res) {
    const { lat, lon } = req.query

    const response = await fetch(
        `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=ru`
    )
    const data = await response.json()
    res.json(data)
}