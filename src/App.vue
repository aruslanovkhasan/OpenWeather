<template>
  <div class="load__container" v-if="!getFullWeather">
    <Loading/>
  </div>
  <div class="container" v-show="getFullWeather">
    <Header/>
    <Main/>
  </div>

</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";
import Loading from "@/components/Loading.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  components:{
    Header,
    Main,
    Loading
  },
  computed:{
    ...mapState(['getFullWeather'])
  }
}
</script>

<style>
.load__container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
</style>