<template>
  <main class="main" v-if="getFullWeather">
    <MainContent />
    <MainWeek />
  </main>
</template>

<script>
import MainContent from "@/components/MainContent.vue";
import MainWeek from "@/components/MainWeek.vue";
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    MainContent,
    MainWeek
  },
  computed:{
    ...mapState(['getFullWeather'])
  },
  methods:{
    ...mapActions(['getWeather'])
  },
  mounted(){
    this.getWeather('Ташкент')
  }
};
</script>

<style>

</style>