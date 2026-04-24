import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        apiKey: process.env.VUE_APP_OPENWEATHER_API_KEY,
        getFullWeather: null
    },
    mutations: {
        getWeather(state, payload) {
            state.getFullWeather = payload
        }
    },
    actions: {

        async getWeather({ commit, state }, city) {
            try {
                const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
                const weather = res.data[0]
                const { lat, lon } = weather
                const res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&appid=${state.apiKey}&units=metric&lang=ru`)
                let weatherInfo = res2.data
                let weatherObj = { ...weatherInfo, name: city }
                commit('getWeather', weatherObj)

            } catch (error) {
                console.log(error);
            }
        }
    },

    getters: {

    }
})
export default store