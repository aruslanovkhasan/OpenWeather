<template>
  <header class="header">
    <nav class="header__nav">
        <a href="" class="logo">
            <img src="@/assets/images/logo.svg" alt="">
            <span>vue weather</span>
        </a>
        <div class="header__search">
            <img src="@/assets/images/water.svg" alt="" @click="darkMode">
            <input 
            type="text"
            placeholder="Выбрать город"
            class="header__search-input"
            v-model="query"
            @keydown.enter="getWeather(query)"
            >
        </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data(){
        return{
            query: ''
        }
    },
    methods:{
        ...mapActions(['getWeather']),
        darkMode(){
            let value = document.body.style.getPropertyValue('--bg')
            if (value == 'white'){
                document.body.style.setProperty('--bg', 'rgb(25, 24, 24)')
                document.body.style.setProperty('--color', 'white')
            }else{
                document.body.style.setProperty('--bg', 'white')
                document.body.style.setProperty('--color', 'black')
            }
        }
    },
    created(){
        document.body.style.setProperty('--bg', 'white')
        document.body.style.setProperty('--color', 'black')
    }
}
</script>

<style>

</style>