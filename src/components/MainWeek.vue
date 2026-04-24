<template>
  <div class="main__week">
    <Day
    v-for="(day, index) 
    in getFullWeather.daily" 
    :key="index"
    :day="day"/>
  </div>
</template>

<script>
import Day from "./Day.vue";
import { mapState } from "vuex";
export default {
    components:{
        Day
    },
    computed:{
        ...mapState(['getFullWeather'])
    }
}
</script>

<style>

</style>