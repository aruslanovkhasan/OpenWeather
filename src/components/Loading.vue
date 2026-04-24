<template>
  <div class="loading"></div>
  <div class="loadings">
  <div class="loading-text">
    <span class="loading-text-words">L</span>
    <span class="loading-text-words">O</span>
    <span class="loading-text-words">A</span>
    <span class="loading-text-words">D</span>
    <span class="loading-text-words">I</span>
    <span class="loading-text-words">N</span>
    <span class="loading-text-words">G</span>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .loading-text {
        margin-top: 30px;
      span {
        width: 100%;
        margin: 0 15px;
        color: lightblue;
        font-size: 50px;
        font-family: 'Quattrocento Sans', sans-serif;   
        @for $i from 0 through 6 {
          &:nth-child(#{$i + 1}) {
            filter: blur(0px);
            animation: blur-text 1.5s (#{$i/5})+s infinite linear alternate;
          }
        }
      }
    }
    .loading{
        width: 400px;
        height: 400px;
        border-radius: 50%;
        border: 50px solid lightblue;
        border-top: 50px solid transparent;
        animation: loading 1s linear infinite;
    }
    @keyframes blur-text {
        0% {filter: blur(0px);}
        100% {filter: blur(4px);}
    }
    @keyframes loading {
        from{
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }   
    }
</style>