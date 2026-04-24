export const weatherName = {
    'ясно': require('@/assets/images/sun.svg'),
    'небольшой дождь': require('@/assets/images/minirain.svg'),
    'пасмурно': require('@/assets/images/cloud.svg'),
    'переменная облачность': require('@/assets/images/cloud.svg'),
    'дождь': require('@/assets/images/rain.svg'),
    'облачно с прояснениями': require('@/assets/images/sunrain.svg')
}
const pressure = 0.750062;

export const getPressure = (hpa) => {
    return Math.round(hpa * pressure)
}

// Unix Time
export const unix = (dt, type) => {
    const second = dt * 1000
    const data = new Date(second)

    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(today.getDate() + 1)

    if(type === 'weekday'){
        if(data.getDate() === today.getDate()){
            return 'Сегодня'
        }
        if(data.getDate() === tomorrow.getDate()){
            return 'Завтра'
        }
    }

    let result = 
    type == 'day' ? data.toLocaleString('ru-RU', {day: 'numeric'}) :
    type == 'month' ? data.toLocaleString('ru-RU', {month: 'long'}) :
    type == 'weekday' ? data.toLocaleString('ru-RU', {weekday: 'short'}) : ''

    return result
}