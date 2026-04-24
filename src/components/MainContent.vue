<template>
  <div class="main__content">
    <div class="main__content-left">
        <p class="main__content-left-degree">{{ Math.round(getFullWeather.current.temp) }}°</p>
        <p class="main__content-left-today">Сегодня</p>
        <p class="main__content-left-time">Время: {{ getTime }}</p>
        <p class="main__content-left-city">Город: {{ getFullWeather.name }}</p>
        <div class="main__content-left-img">
            <img :src="getImg" alt="">
        </div>
    </div>
    <div class="main__content-right">
        <img src="@/assets/images/mainBg.svg" alt="" class="main__content-right-bg">
        <div class="main__content-right-item">
            <div class="main__content-right-img">
                <img src="@/assets/images/temp.svg" alt="">
            </div>
            <span>Температура</span>
            <p>{{ Math.round(getFullWeather.current.temp) }}° - ощущается как {{ Math.round(getFullWeather.current.feels_like) }}°</p>
        </div>
        <div class="main__content-right-item">
            <div class="main__content-right-img">
                <img src="@/assets/images/pressure.svg" alt="">
            </div>
            <span>Давление</span>
            <p>{{ getPressureMm }} мм ртутного столба - {{ getState }}</p>
        </div>
        <div class="main__content-right-item">
            <div class="main__content-right-img">
                <img src="@/assets/images/osadki.svg" alt="">
            </div>
            <span>Осадки</span>
            <p>Вероятность осадков: {{ getFullWeather.current.humidity }}%</p>
        </div>
        <div class="main__content-right-item">
            <div class="main__content-right-img">
                <img src="@/assets/images/wind.svg" alt="">
            </div>
            <span>Ветер</span>
            <p>{{ getFullWeather.current.wind_speed }} м/с {{ getWindDirection }} - {{ getWindState }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { weatherName, getPressure } from '@/icons'

export default {
    computed:{
        ...mapState(['getFullWeather']),
        getTime(){
            return new Date().toLocaleString('en-US', {
                timeZone: this.getFullWeather.timezone,
                timeStyle: 'short',
                hourCycle: 'h23'
            })
        },
        description(){
            return this.getFullWeather.current.weather[0].description
        },
        getImg(){
            return weatherName[this.description] || weatherName['ясно']
        },
        getPressureMm(){
            return getPressure(this.getFullWeather.current.pressure)
        },
        getState(){
            if (this.getPressureMm == 760){
                return 'нормальное'
            }
            else if(this.getPressureMm > 760){
                return 'повышенное'
            }
            else{
                return 'пониженное'
            }
        },
        getWindDirection(){
            let windDirection = this.getFullWeather.current.wind_deg
            if (windDirection == 0){
                return 'север'
            }
            if (windDirection == 90){
                return 'восток'
            }
            if (windDirection == 180){
                return 'юг'
            }
            if (windDirection == 270){
                return 'запад'
            }
            if (windDirection > 0 && windDirection < 90){
                return 'северо-восток'
            }
            if (windDirection > 90 && windDirection < 180){
                return 'юго-восток'
            }
            if (windDirection > 180  && windDirection < 270){
                return 'юго-запад'
            }else{
                return 'северо-запад'
            }
        },
        getWindState(){
            let windState = this.getFullWeather.current.wind_speed
            if (windState <= 0.2){
                return 'Штиль'
            }
            else if(windState >= 0.3 && windState <= 1.5){
                return 'Очень лёгкий ветер'
            }
            else if(windState >= 1.6 && windState <= 3.3){
                return 'Лёгкий ветер'
            }
            else if(windState >= 3.4 && windState <= 5.4){
                return 'Слабый ветер'
            }
            else if(windState >= 5.5 && windState <= 7.9){
                return 'Умеренный ветер'
            }
            else if(windState >= 8 && windState <= 10.7){
                return 'Свежий ветер'
            }
            else if(windState >= 10.8 && windState <= 13.8){
                return 'Сильный ветер'
            }
            else if(windState >= 13.9 && windState <= 17.1){
                return 'Крепкий ветер'
            }
            else if(windState >= 17.2 && windState <= 20.7){
                return 'Очень крепкий ветер'
            }   
            else if(windState >= 20.8 && windState <= 24.4){
                return 'Шторм'
            }
            else if(windState >= 24.5 && windState <= 28.4){
                return 'Сильный шторм'
            }
            else if(windState >= 28.5 && windState <= 32.6){
                return 'Жестокий шторм'
            }else{
                return 'Ураган'
            }
        }
    },
}
</script>

<style>

</style>